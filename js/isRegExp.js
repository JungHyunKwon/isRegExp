/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	var toStr = Object.prototype.toString;

	/**
	 * @name isRegExp
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	window.isRegExp = function(value) {
		return toStr.call(value) === '[object RegExp]';
	};
})();