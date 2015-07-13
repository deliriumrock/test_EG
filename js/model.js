var Model = function () {
	this.tree = [];
	this._foundNode = null;

	this.loadTree();

	if (!this.tree.length) {
		this.tree.push({
			id: Date.now(),
			name: 'Root',
			number: "" + (this.tree.length + 1),
			children: []
		});
	}
};

Model.prototype._searchNode = function(tree, id) {
	for (var i = 0; i < tree.length; i++) {
		if (tree[i].id == id) {
			this._foundNode = tree[i];
		}
		else if (tree[i].children.length) {
			this._searchNode(tree[i].children, id);
		}
	}
};

Model.prototype._getFoundNode = function() {
	var element = this._foundNode;
	
	this._foundNode = null;

	return element;
};

Model.prototype.addNode = function(element) {
	console.log(element.closest('li').attr('id'));

	this._searchNode(this.tree, element.closest('li').attr('id'));
	
	if (!this._foundNode) {		
		return false;
	}

	var parent = this._getFoundNode();

	var node = {
		id: Date.now(),
		name: 'Item',
		number: parent.number + ' ' + (parent.children.length + 1),
		children: []
	};

	parent.children.push(node);

	return {
		parent: parent,
		id: node.id,
		name: node.name,
		number: node.number
	};
};

Model.prototype.removeNode = function(element) {
	this._searchNode(this.tree, element.closest('li').attr('id'));

	if (!this._foundNode) {
		return false;
	}

	var parent = this._getFoundNode();

	delete parent;
};

Model.prototype.saveTree = function() {
	Utils.setCookie('os_tree_test', JSON.stringify(this.tree));
};

Model.prototype.loadTree = function() {
	var tree = JSON.parse(Utils.getCookie('os_tree_test'));
	this.tree = (tree ? tree : []);
};