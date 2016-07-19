app.controller('myController', ['$scope', function($scope){
  $scope.greeting = 'hello';

  $scope.onclick = function() {
    $scope.greeting = 'hello ' + $scope.myName;
  };
}]);
