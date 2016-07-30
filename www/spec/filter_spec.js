describe('nl2br filter test', function(){
  beforeEach(module('myApp'));
  it('test true', inject(function($filter){
    var str = 'hello\nworld';
    var result = 'hello<br/>world';
    var nl2br = $filter('nl2br');
    expect(nl2br(str)).toEqual(result);
  }));

  it('test false', inject(function($filter){
    var str = 12;
    var result = 12;
    var nl2br = $filter('nl2br');
    expect(nl2br(str)).toEqual(result);
  }));
});
