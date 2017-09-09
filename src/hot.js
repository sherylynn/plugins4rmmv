function hot(){
  console.log('第一次hot热加载')
  console.log('看上去似乎第二次没有，实际上真的没有')
  console.log('即使注册到window上也无用')
  //看来使用了node的写法后有用
  console.log('重新定义一下果然有用，fuck')
  //
}
module.exports=hot
