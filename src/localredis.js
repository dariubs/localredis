(function(){
	'use strict';

	var isCommonjs = typeof module !== 'undefined' && module.exports;

	var localRedis = {
		set : function(key, value){
			localStorage[key] = value;
			return localStorage[key];
		},
		get : function(key){
			return localStorage.getItem(key);
		},

	}

	if (isCommonjs) {
		module.exports = localRedis
		module.exports = lr
	} else {
		window.localRedis = localRedis
		window.lr = localRedis
	}
})();