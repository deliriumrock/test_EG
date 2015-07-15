describe("Cookies", function() {
	it("should save cookies", function() {
		expect(Utils.setCookie("os_jasmine_cookies_test", 1)).toBeUndefined();
	});

	it("should get cookies that were created in previous spec", function() {
		expect(Utils.getCookie("os_jasmine_cookies_test")).toEqual('1');
	});
});
