var Templates = {
	ulBlock: '<ul class="box" />',

	getNodeBlock: function (id, name, number) {
		return '<li class="drawer node-close" id="' + id + '" number = "' + number + '"><div class="content"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class="glyphicon glyphicon-minus button-left none" aria-hidden="true"></span>' + name + ' ' + number +'<span class="glyphicon glyphicon-minus-sign button-right" aria-hidden="true"></span><span class="glyphicon glyphicon-plus-sign button-right" aria-hidden="true"></span></div></li>';
	}
};
