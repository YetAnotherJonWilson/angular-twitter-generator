angular.module('twitterApp', []);

angular.module('twitterApp').controller('MainController', function($scope, $http){
    //$http get info
    //random adjective
    //random noun
    $scope.handleClick = function() {
      $http.get('/adj')
      .then(function(response){
        var ranNum = (Math.floor(Math.random() * 10));
        console.log(response);
        //$scope.adjective = response.data.
      });
      $http.get('/noun')
      .then(function(response){
        var ranNum = (Math.floor(Math.random() * 10));
        $scope.noun = response.data.ourAdjectives[ranNum];
      });
      //combine adj+noun
      $scope.twitterHandle = $scope.adjective + $scope.noun;

})
