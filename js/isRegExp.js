/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	'use strict';

	(function() {
		var _toString = Object.prototype.toString;

		/**
		 * @name isRegExp
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isRegExp = function(value) {
			return _toString.call(value) === '[object RegExp]';
		};
	})();
}catch(e) {
	console.error(e);
}