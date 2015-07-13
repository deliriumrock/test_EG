var View = function (model, mainNode) {
	this.createTree(model.tree, mainNode);
	this.createShift(mainNode);
};

View.prototype.createTree = function (tree, node) {
	for (var i = 0; i < tree.length; i++) {
		node.append(
			Templates.getNodeBlock(
				tree[i].id,
				tree[i].name,
				tree[i].number));

		if (tree[i].children.length) {
			$('li#' + tree[i].id, node).append('<ul class="box" />');
			$('li#' + tree[i].id + ' > div > span.none', node).removeClass('none');

			this.createTree(tree[i].children, $('li ul', node).first());
		}
	}
};

View.prototype.createShift = function (element) {
	element
		.find("li")
		.each(function () {
			var depth = $(this).parents("ul").length;

			$(this).children('.content').css('margin-left', 24 * depth);
		});
};

View.prototype.addNode = function (element, newNode) {
	var obj = element.closest('li');

	if (newNode.parent.children.length < 2) {
		obj.append('<ul class="box" />');
	}

	$('ul', obj)
		.first()
		.append(Templates.getNodeBlock(
			newNode.id,
			newNode.name,
			newNode.number));

	obj
		.removeClass('node-close')
		.addClass('node-open');

	element
		.closest('div')
		.find('span.none')
		.removeClass('none');

	this.createShift(obj);
};

View.prototype.removeNode = function (element) {
	var obj = element.closest('li');

	obj.remove();
};