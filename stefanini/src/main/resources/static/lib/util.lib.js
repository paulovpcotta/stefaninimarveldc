stefanini.service('util', ['$http', 
                                function($http){
	
	var uri = 'http://' + window.location.host + '/heroi-stefanini';
	
	/**
	 * Method uri return
	 */
	this.getUri = function(){
		return uri;
	};
	
}]);