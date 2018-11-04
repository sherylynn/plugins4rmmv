let hot_Utils=()=>{
  //Utils is not prototype
  Object.assign(Utils,{
    isNwjs() {
      //need to fix webpack translation
      //return typeof require === 'function' && typeof process === 'object' && !process.versions.electron
      //babel自己实现了一个运行时的process.应当访问global的process
      console.log(process)
      console.log(global.process)
      return typeof global.require === 'function' && typeof global.process === 'object' && !global.process.versions.electron
    }
  })
}
module.exports=hot_Utils
