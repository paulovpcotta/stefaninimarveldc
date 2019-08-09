/**
 * Controller para add face group
 */
stefanini.controller('heroiController', ['$scope', '$state', '$cookieStore', 'util', '$http', 'heroiService',
    function($scope, $state, $cookieStore, util, $http, heroiService){
	
	$scope.heroiDto = {};
	$scope.messages = "";
	$scope.cssMessage = "";
	$scope.visibleMessage = false;
	
	
	/**
	 * Method upload file
	 */
	$scope.cadastraHeroi = function (nome, sexo) {
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		$scope.heroiDto.nome = nome;
		$scope.heroiDto.sexo = sexo;
		console.log(sexo);
		heroiService.postHeroi(util.getUri(), $scope.heroiDto).success(function(data, status, headers, config) {
			$scope.visibleMessage = false;
		}).error(function(data, status, headers, config) {
			$scope.messages = data.message;
			$scope.visibleMessage = true;
			$scope.cssMessage = "message-table-incorret";
	    });
	};
	
	$scope.randomico = function(){
		heroiService.getPoderesHerois(util.getUri()).success(function(data, status, headers, config) {
			$scope.visibleMessage = false;
		}).error(function(data, status, headers, config) {
			$scope.messages = data.message;
			$scope.visibleMessage = true;
			$scope.cssMessage = "message-table-incorret";
	    });
	};
	
}]);