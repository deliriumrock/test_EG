var Model = function () {
	this.tree = {};
	this._foundNode = null;

	this.loadTree();

	if (!this.tree.id) {
		this.tree.children.push(this._getNewObj());
	}
};

Model.prototype._getNewObj = function(name, number) {
	return {
		id: Date.now(),
		name: (name || 'Parent'),
		number: "" + (number || (this.tree.children ? this.tree.children.length + 1 : 1)),
		children: []
	}
};

Model.prototype._searchNode = function (tree, id, searchParentFlag) {
	for (var i = 0; i < tree.children.length; i++) {
		if (tree.children[i].id == id) {
			this._foundNode = {
				element: (searchParentFlag ? tree : tree.children[i]),
				child_id: i
			};
		}
		else if (tree.children[i].children.length) {
			this._searchNode(tree.children[i], id, searchParentFlag);
		}
	}
};

Model.prototype._getFoundNode = function () {
	var element = this._foundNode;

	this._foundNode = null;

	return element;
};

Model.prototype.addNode = function (elementId) {
	var parent = null;
	var node = null;
	var number = 0;

	this._searchNode(this.tree, elementId);

	if (this._foundNode) {
		parent = this._getFoundNode();
		number = parent.element.number + '-' + (parent.element.children.length + 1);
		node = this._getNewObj('Child', number);

		parent.element.children.push(node);
	}
	else {
		node = this._getNewObj();

		this.tree.children.push(node);
	}

	return {
		parent: (parent ? parent.element : null),
		id: node.id,
		name: node.name,
		number: node.number
	};
};

Model.prototype.countChildrenForParent = function (elementId) {
	this._searchNode(this.tree, elementId, true);

	if (!this._foundNode) {
		return false;
	}

	var obj = this._getFoundNode();

	return (obj.element ? obj.element.children.length : 0);
};

Model.prototype.removeNode = function (elementId) {
	this._searchNode(this.tree, elementId, true);

	if (!this._foundNode) {
		return false;
	}

	var obj = this._getFoundNode();

	obj.element.children.splice(obj.child_id, 1);

	return true;
};

Model.prototype.saveTree = function () {
	Utils.setCookie('os_tree_test', JSON.stringify(this.tree));
};

Model.prototype.loadTree = function () {
	var tree = JSON.parse(Utils.getCookie('os_tree_test'));

	this.tree = (tree ? tree : this._getNewObj());
};