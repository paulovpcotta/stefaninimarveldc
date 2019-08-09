/**
 * Create service 27/04/2019
 */
stefanini.service('heroiService', ['$http', 
                                function($http){
	
	/**
	 * Registro de poderes de poderes
	 */
	this.postHeroi = function(uri, heroisDto){
		return $http.post(uri + '/cadastro-heroi/cadastra-herois', heroisDto);
	};
	
	/**
	 * Register image face large person group
	 */
	this.getPoderesHerois = function(uri){
		return $http.get(uri + '/cadastro-heroi/randomico');
	};
	
}]);