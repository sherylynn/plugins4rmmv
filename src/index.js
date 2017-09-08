/*:
 * @plugindesc 测试的脚本
 * @author sherylynn
 *
 * @param param1
 * @desc 参数1
 * 默认值 10
 * @default 10
 *
 * @param param2
 * @desc 参数2
 * 默认值 20
 * @default 20
 * @help new test for rmmv
 * 插件命令：
 *  ChangeScreenSize 1024 768 #修改分辨率为1024x768
 *  restoreScreenSize #恢复默认分辨率
 *
 *
 */
let params =PluginManager.parameters('main')
let param1=Number(params['param1']) || 1024
let param2=Number(params['param2']) || 768
let setScreenSize=(x,y)=>{
  let deltaX=x-window.innerWidth
  let deltaY=y-window.innerHeight
  window.moveBy(-deltaX/2,-deltaY/2)
  window.resizeBy(deltaX,deltaY)
}
//#使用方法
//setScreenSize(param1,param2)

let _Game_Interpreter_pluginCommand =Game_Interpreter.prototype.pluginCommand
Object.assign(Game_Interpreter.prototype,{
  pluginCommand(command,args){
    _Game_Interpreter_pluginCommand.call(this,command,args)
    if (command === 'ChangeScreenSize') {
      let _screenWidth=Number(args[0])||816
      let _screenHeight=Number(args[1])||624
      setScreenSize(_screenWidth, _screenHeight)
    } else if (command === 'RestoreScreenSize') {
      setScreenSize(816, 624)
    } else {
    }
  }
})
