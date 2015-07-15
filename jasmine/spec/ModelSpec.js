describe("Player", function() {
	var model;
	var element_id;
	var node_count;
	var count_children;

	beforeEach(function() {
		model = new Model();

		for (var i = 0; i < 5; i++) {
			model.addNode();
		}

		var rnd = Math.floor(Math.random() * (model.tree.children.length - 2));

		count_children = node_count = model.tree.children.length;
		element_id = model.tree.children[rnd].id;
	});

	it("should add new node", function() {
		model.addNode();
		expect(model.tree.children.length).toEqual(node_count + 1);
	});

	it("should remove node", function() {
		node_count = model.tree.children.length;
		model.removeNode(element_id);
		expect(model.tree.children.length).toEqual(node_count - 1);
	});

	it("should return count children for node", function() {
		expect(model.countChildren(element_id)).toEqual(count_children);
	});
});
