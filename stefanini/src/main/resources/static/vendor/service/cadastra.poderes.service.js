/**
 * Create service 27/04/2019
 */
stefanini.service('cadastraPoderService', ['$http', 
                                function($http){
	
	/**
	 * Registro de poderes de poderes
	 */
	this.postPoder = function(uri, poderesDto){
		return $http.post(uri + '/cadastro-heroi/cadastra-poderes', poderesDto);
	};
	
	/**
	 * Registro de poderes de herois
	 */
	this.postHeroi = function(uri, heroisDto){
		return $http.post(uri + '/cadastro-heroi/cadastra-herois', heroisDto);
	};
	
	/**
	 * Register image face large person group
	 */
	this.getSimilary = function(uri, faceID, group){
		return $http.get(uri + '/api-similary/similary?faceID=' + faceID + '&gruop=' + group);
	};
	
	/**
	 * Register image face large person group
	 */
	this.getTrain = function(uri){
		return $http.get(uri + '/api-similary/train');
	};
	
}]);