$(function () {
	var model = new Model();
	var view = new View(model, $('ul.main'));
	var controller = new Controller(model, view);
});