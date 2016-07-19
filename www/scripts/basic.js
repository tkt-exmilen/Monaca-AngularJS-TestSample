var app = angular.module('myApp', ['onsen', 'ngSanitize']);

app.controller('BasicController', ['$scope', function($scope){
  $scope.memo = 'hello\nworld';
}]);

app.filter('nl2br', function(){
  return function(value) {
    if(!angular.isString(value)){
      return value;
    }
    return value.replace(/\r?\n/g, '<br/>');
  }
});
