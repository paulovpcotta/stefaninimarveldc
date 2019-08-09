/**
 * Controller para add face group
 */
stefanini.controller('personagemController', ['$scope', '$state', '$cookieStore', 'util', '$http', 'personagemService',
    function($scope, $state, $cookieStore, util, $http, personagemService){
	
	$scope.poderesDto = {};
	$scope.messages = "";
	$scope.cssMessage = "";
	$scope.visibleMessage = false;
	$scope.personagens = [];
	
	
	/**
	 * Method upload file
	 */
	$scope.carregaPersonagem = function () {
		personagemService.getPersonagem(util.getUri()).success(function(data, status, headers, config) {
			$scope.personagens = data;
		}).error(function(data, status, headers, config) {
			$scope.messages = data.message;
	    });
	};
	
}]);