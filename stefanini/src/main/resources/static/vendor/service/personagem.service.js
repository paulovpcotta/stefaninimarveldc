/**
 * Create service 27/04/2019
 */
stefanini.service('personagemService', ['$http', 
                                function($http){
	
	/**
	 * carrega os personagens
	 */
	this.getPersonagem = function(uri){
		return $http.get(uri + '/herois');
	};
	
	
	/**
	 * Registro de poderes de poderes
	 *//*
	this.postPoder = function(uri, poderesDto){
		return $http.post(uri + '/cadastro-heroi/cadastra-poderes', poderesDto);
	};
	
	*//**
	 * Registro de poderes de herois
	 *//*
	this.postHeroi = function(uri, heroisDto){
		return $http.post(uri + '/cadastro-heroi/cadastra-herois', heroisDto);
	};*/
	
}]);