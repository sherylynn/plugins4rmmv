function hot(){
  console.log('第一次hot热加载')
  console.log('看上去似乎第二次没有，实际上真的没有')
  console.log('即使注册到window上也无用')
  //看来使用了node的写法后有用
  console.log('重新定义一下果然有用，fuck')
  class one {
    constructor(){
      this.x=1
    }
  }
  global.one=one
  /*
  let global.one=one//错误
  var global.two=class one {//这种是错误写法,上面的才是正常写法
    constructor(){
      this.x=2
    }
  }
  */
  //
}
module.exports=hot
