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
///*
let a=1
alert(a)
let params =PluginManager.parameters('main')
let param1=Number(params['param1']) || 1024
let param2=Number(params['param2']) || 768
let setScreenSize=(x,y)=>{
  alert(x)
  let deltaX=x-window.innerWidth
  let deltaY=y-window.innerHeight
  window.moveBy(-deltaX/2,-deltaY/2)
  window.resizeBy(deltaX,deltaY)
}
//*/
/*
//let HealthBar=Window.HealthBar||{}



alert(12)
let setScreenSize=(x,y)=>{
  alert(x)
  let deltaX=x-window.innerWidth
  let deltaY=y-window.innerHeight
  window.moveBy(-deltaX/2,-deltaY/2)
  window.resizeBy(deltaX,deltaY)
}
setScreenSize(param1,param2)
*/
/*
alert(param1)
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
*/
/*
let VariableProgressBar= window.VariableProgressBar ||{}

//class Varia

VariableProgressBar._Scene_Map_createAllWindows =Scene_Map.prototype.createAllWindows
Scene_Map.prototype.createAllWindows=()=>{
  VariableProgressBar._Scene_Map_createAllWindows.call(this)
  this.addChild(new VariableProgressBar.Window_Bar())
}

class VariableProgressBar_Window_Bar extends Window_Base {
  constructor(...args){
    super(...args)
    this.opacity=this.windowOpacity()
    alert(1)
    super.initialize('20','20','500','500')
  }
  initialize(){
    return super.initialize(this.windowPosition().x,this.windowPosition().y,windowWidth(),windowHeight())
  }
  windowPosition(){
    return {x:parseInt(VariableProgressBar.parameters['windowPostionX']||'20'),y:parseInt(VariableProgressBar.parameters['windowPositionY']||'20')}
  }
  widowWidth() {
    return parseInt(VariableProgressBar.parameters['windowWidth']||'500')
  }
  windowHeight() {
    return parseInt(VariableProgressBar.parameters['windowHeight']||'500')
  }
  windowOpacity(){
    return parseInt(VariableProgressBar.parameters['windowOpacity']||'50')
  }
  show(){

  }
}
let VariableProgressBar_Window_Bar_1 =new VariableProgressBar_Window_Bar()
*/
