function heroesController($scope, $http){
	$scope.getHeroes = function(){
		console.log("getting");
		$http({
			url : '/api/heroes',
			method : "GET"
		}).then(function (response) {
			console.log(response);
			$scope.heroes = response.data;
        });
	};
	$scope.getHeroes();
	$scope.getHero = function(heroName) {
		$http({
			url : '/api/hero/'+heroName,
			method : 'GET'
		}).then(function(response){
			$scope.selectedHero = response.data;
			$scope.selectedHero.selected = true;
		});
    };
	$scope.editHero = function(){
        $http({
            url : '/api/hero/'+$scope.selectedHero.name,
            method : 'post',
			data : $scope.selectedHero
        }).then(function(response){
            $scope.selectedHero = response.data;
            $scope.selectedHero.selected = true;
        });
	};
	$scope.newHero = function(){
        $http({
            url : '/api/heroes',
            method : "POST",
			data : {
        		name : $scope.newHeroName,
				power : $scope.newSuperPower
            }
		}).then(function (response) {
            $scope.newHeroName = '';
            $scope.newSuperPower = '';
            $scope.getHeroes();
        });
	};
}
angular.module('mainApp',[])
		.controller('heroesController',heroesController);
