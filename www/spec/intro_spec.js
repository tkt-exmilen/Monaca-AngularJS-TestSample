describe('Jasmineの基本', function(){
  beforeEach(function(){
    // 初期化処理
  });

  it('基本テスト', function(){
    expect(1+2).toEqual(3);
  });
});

describe('nl2brフィルターのテスト', function(){
  beforeEach(module('myApp'));
  it('test', inject(function($filter){
    var str = 'hello\nworld';
    var result = 'hello<br/>world';
    var nl2br = $filter('nl2br');
    expect(nl2br(str)).toEqual(result);
  }));
});
