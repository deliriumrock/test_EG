var Templates = {
	getNodeBlock: function(id, name, number) {
		return '<li class="drawer node-close" id="' + id + '" number = "' + number + '"> \n\
			<div class="content"> \n\
			<span class="glyphicon glyphicon-user" aria-hidden="true"></span> \n\
			<span class="glyphicon glyphicon-minus button-left none" aria-hidden="true"></span>'
			+ name + ' ' + number +
			'<span class="glyphicon glyphicon-minus-sign button-right" aria-hidden="true"></span> \n\
		    <span class="glyphicon glyphicon-plus-sign button-right" aria-hidden="true"></span> \n\
			</div> \n\
			</li>';
	}
};
