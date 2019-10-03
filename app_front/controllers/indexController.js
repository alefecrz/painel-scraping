(function(){
	'use strict'

	console.log("[ indexController - Controlador iniciado]");

	angular.module("panel",[]).controller('indexController', indexController);
		indexController.$inject = ['$scope'];
		function indexController($scope){
			var vm = this;
			vm.test="asdasd";
		}
})();