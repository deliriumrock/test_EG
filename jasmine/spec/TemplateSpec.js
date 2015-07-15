describe("Templates", function() {

	it("should return html-code for new node", function() {
		expect(Templates.getNodeBlock('1', 'NewNode', 1)).toEqual('<li class="drawer node-close" id="1" number = "1"><div class="content"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class="glyphicon glyphicon-minus button-left none" aria-hidden="true"></span>NewNode 1<span class="glyphicon glyphicon-minus-sign button-right" aria-hidden="true"></span><span class="glyphicon glyphicon-plus-sign button-right" aria-hidden="true"></span></div></li>');
	});

});
