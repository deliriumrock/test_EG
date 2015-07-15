var Controller = function (model, view) {
	$('body')
		.on('click',
			'.glyphicon-plus, .glyphicon-minus',
			function (e) {
				if ($(this).closest('li').hasClass('node-closed')) {
					$(this)
						.closest('li')
						.removeClass('node-closed')
						.addClass('node-open');
					$(this)
						.removeClass('glyphicon-plus')
						.addClass('glyphicon-minus');
				}
				else {
					$(this)
						.closest('li')
						.removeClass('node-open')
						.addClass('node-closed');
					$(this)
						.removeClass('glyphicon-minus')
						.addClass('glyphicon-plus');
				}
			}
		)
		.on('click',
			'.glyphicon-plus-sign',
			function (e) {
				var newNode = model.addNode($(this).closest('li').attr('id'));

				view.addNode($(this), newNode);
				model.saveTree();
			}
		)
		.on('click',
			'.glyphicon-minus-sign',
			function (e) {
				view.removeNode($(this));
				model.removeNode($(this).closest('li').attr('id'));
				model.saveTree();
			}
		);
};