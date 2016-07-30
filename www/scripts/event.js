app.filter('nl2br', function(){
  return function(value) {
    if(!angular.isString(value)){
      return value;
    }
    return value.replace(/\r?\n/g, '<br/>');
  }
});

app.factory('hogeService', function($http){
  var hoge = {};
  hoge.getHogeData = function(key) {
    var searchKey = {key: key};
    return $http.post('http://hoge/hoge', searchKey);
  };
  return hoge;
});

app.controller('myController', ['$scope', function($scope, hogeService){
  $scope.greeting = 'hello';

  $scope.onclick = function() {
    $scope.greeting = 'hello ' + $scope.myName;
  };

  $scope.httpRequest = function() {
    hogeService.getHogeData('hoge').success(function(data, status){
      $scope.httpRep = data;
    });
  };
}]);
