describe('event controller test', function(){
  var scope;
  beforeEach(module('myApp'));
  beforeEach(inject(function(_$rootScope_, _$controller_){
    var $rootScope = _$rootScope_;
    var $controller = _$controller_;
    scope = $rootScope.$new();
    $controller('myController', {$scope: scope});
  }));

  it('check scope', function(){
    expect(scope.greeting).toEqual('hello');
    scope.myName = 'Tom';
    scope.onclick();
    expect(scope.greeting).toEqual('hello Tom');
  });
});
