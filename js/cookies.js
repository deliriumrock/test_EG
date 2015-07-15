if (!window.Utils) window.Utils = {};

var Utils = Utils;

Utils.setCookie = function (name, value) {
	try {
		window.localStorage.setItem(name, value);
	}
	catch (e) {
		var exp = new Date();

		exp.setDate(exp.getDate() + 365 * 10);

		document.cookie = name + "=" + value + "; expires=" + exp.toUTCString();
	}
};

Utils.getCookie = function (name) {
	var ret = null;

	try {
		ret = window.localStorage.getItem(name);
	}
	catch (e) {
		var prefix = name + "=",
			cookieStartIndex = document.cookie.indexOf(prefix);

		if (cookieStartIndex == -1) {
			return null;
		}

		var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);

		if (cookieEndIndex == -1) {
			cookieEndIndex = document.cookie.length;
		}

		ret = decodeURIComponent(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
	}

	return ret;
};