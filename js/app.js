(function() {
  var app = angular.module('dogpark', [ 'ngMap']);

  app.controller('parkController', function($http, $scope){
  


  	$http.get('http://opendata.odense.dk/dataset/62fe5392-9bb6-49c5-ba41-3a1b0297a3c2/resource/37816225-3471-4fd5-a855-66b9780baf8d/download/hundeskoveoghundeparker.json')
  	.success(function(data){
  		$scope.parks = data.features;
  		console.log($scope.parks[0].properties.tilbud);
  		console.log($scope.parks);
  	});
  });

  
  })();