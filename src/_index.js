//just for init
/**
 *
 *
 * @plugindesc 测试的脚本
 * @author sherylynn
 *
 * @help new test for rmmv
 *
 *
 *
 */

//let HealthBar=Window.HealthBar||{}


let VariableProgressBar= window.VariableProgressBar ||{}
VariableProgressBar.parameters = PluginManager.parameters('main')
//class Varia

VariableProgressBar._Scene_Map_createAllWindows =Scene_Map.prototype.createAllWindows
Scene_Map.prototype.createAllWindows=()=>{
  VariableProgressBar._Scene_Map_createAllWindows.call(this)
  this.addChild(new Window_Bar())
}

class Window_Bar extends Window_Base {
  constructor(...args){
    super(...args)
    super.initialize(this.windowPosition().x,this.windowPosition().y,windowWidth(),windowHeight())
    this.opacity=this.windowOpacity()
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
  show(id,i){
    let v1=$gameVariables.value(id)
    let v2=VariableProgressBar.top
    let rate=v1/v2
    let width =300
    let x=0
    let y=i*25
    let fillW=Math.floor(width*rate)
    this.contents.fontSize=24
    this.contents.fillRect(x,y+8,width,20,'#000000')
    this.contents.gradientFillRect(x,y+8,fillW,20,'#ff0000','#ff0000')
    this.drawText('v'+id+':'+v1+'/'+v2,x+12,y-4,width,'center','#ff0000')

  }
  update(){
    this.contents.clear()
    for (var i = 0; i < VariableProgressBar.id.length; i++) {
      this.show(VariableProgressBar.id[i],i);
    }
  }
}
let _Game_Interpreter_pluginCommand =Game_Interpreter.prototype.pluginCommand
Object.assign(Game_Interpreter.prototype,{
  pluginCommand(command,args){
    _Game_Interpreter_pluginCommand.call(this,command,args)
    if (command === 'VariableProgressBar') {
      if(args[0]=='reset'){
        VariableProgressBar.id.splice(0,VariableProgressBar.id.length)

      }
    }
  }
})

$gamePlayer._direction
