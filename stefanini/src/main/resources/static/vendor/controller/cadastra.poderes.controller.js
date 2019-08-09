/**
 * Controller para add face group
 */
stefanini.controller('cadastraPoderController', ['$scope', '$state', '$cookieStore', 'util', '$http', 'cadastraPoderService',
    function($scope, $state, $cookieStore, util, $http, cadastraPoderService){
	
	$scope.poderesDto = {};
	$scope.messages = "";
	$scope.cssMessage = "";
	$scope.visibleMessage = false;
	$scope.poderes = [];
	
	
	/**
	 * Method upload file
	 */
	$scope.cadastraPoder = function (nomePoder, forca) {
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		$scope.poderesDto.nomePoder = nomePoder;
		$scope.poderesDto.forca = forca;
		cadastraPoderService.postPoder(util.getUri(), $scope.poderesDto).success(function(data, status, headers, config) {
			$scope.poderes.push(data);
			console.log($scope.poderes);
			$scope.visibleMessage = false;
		}).error(function(data, status, headers, config) {
			$scope.messages = data.message;
			$scope.visibleMessage = true;
			$scope.cssMessage = "message-table-incorret";
	    });
	};
	
}]);