var View = function (model, mainNode) {
	this.model = model;

	this.createTree(model.tree, mainNode);
	this.createShift(mainNode);
};

View.prototype.createTree = function (tree, node) {
	for (var i = 0; i < tree.children.length; i++) {
		node.append(
			Templates.getNodeBlock(
				tree.children[i].id,
				tree.children[i].name,
				tree.children[i].number));

		if (tree.children[i].children.length) {
			$('li#' + tree.children[i].id, node).append(Templates.ulBlock);
			$('li#' + tree.children[i].id + ' span.none', node).removeClass('none');

			this.createTree(tree.children[i], $('li#' + tree.children[i].id + ' ul', node).first());
		}
	}
};

View.prototype.createShift = function (element) {
	element
		.find("ul li")
		.each(function () {
			var depth = $(this).parents("ul").length - 1;

			$(this).children('.content').css('margin-left', 24 * depth);
		});
};

View.prototype.addNode = function (element, newNode) {
	var obj = element.closest('li');

	if (newNode.parent) {
		if (newNode.parent.children.length < 2) {
			obj.append(Templates.ulBlock);
		}

		$('ul', obj)
			.first()
			.append(
				Templates.getNodeBlock(
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
	}
	else {
		$('ul.main')
			.append(
				Templates.getNodeBlock(
					newNode.id,
					newNode.name,
					newNode.number));
	}

	this.createShift(obj);
};

View.prototype.removeNode = function (element) {
	obj = element.closest('li');

	if (this.model.countChildren(element.closest('li').attr('id')) == 1) {
		var parent = obj.parents('li')[0];

		$(parent)
			.find('span.glyphicon-minus')
			.addClass('none');
	}

	obj.remove();
};