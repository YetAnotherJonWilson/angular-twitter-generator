angular.module('twitterApp', []);

angular.module('twitterApp').controller('MainController', function($scope, $http){

    //$http get info
    //random adjective
    $scope.nouns = [];
    $scope.adjectives = [];
    $scope.twitterHandle = [];


    var nounCount = 0;
    var adjCount = 0;

    $scope.handleClick = function() {
      for (var i = 0; i < 10; i++) {
        $http.get('/adj')
        .then(function(response){
            var ranNum = (Math.floor(Math.random() * 10));
            // console.log('Whole set', response.data);
            $scope.adjectives.push(response.data[ranNum]);
            // console.log('Adjs', $scope.adjective);

            if(nounCount === 9 && adjCount === 10){
              handleFinished();
            } else {
              nounCount ++;
            }
        });
        $http.get('/noun')
        .then(function(response){
            // console.log('Whole set', response.data);
            var ranNum = (Math.floor(Math.random() * 10));
            $scope.nouns.push(response.data[ranNum]);
            // console.log('Nouns', $scope.noun);

            if(nounCount === 10 && adjCount === 9){
              handleFinished();
            } else {
              adjCount++;
            }
        });
      //$scope.twitterHandle.push($scope.adjective + $scope.noun);
    }

    function handleFinished(){
      console.log('Nouns', $scope.nouns);
      console.log('Adj', $scope.adjectives);
    }


    //console.log($scope.twitterHandle);

}
});
