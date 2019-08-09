/**
	Abstract for construction commom in user case
*/
stefanini.controller('abstractController', ['$scope', '$state', 
    function($scope, $state) {
      
	  $scope.initial = function(){
	    $state.go('/', {});
	  };
	  
	  $scope.herois = function(){
	    $state.go('herois', {});
	  };
	  
}]).directive('menu', function() {
  return {
  	restrict: 'E',
    templateUrl: 'template/menu.html'
  };
});