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

//class Varia

VariableProgressBar._Scene_Map_createAllWindows =Scene_Map.prototype.createAllWindows
Scene_Map.prototype.createAllWindows=()=>{
  VariableProgressBar._Scene_Map_createAllWindows.call(this)
  this.addChild(new VariableProgressBar.Window_Bar())
}

class VariableProgressBar.Window_Bar extends Window_Base {
  constructor(...args){
    super(...args)
    this.opacity=this.windowOpacity()
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

}

VariableProgressBar.Window_Bar=()=>{
  this.initialize.apply(this,arguments)
}


//VariableProgressBar.Window_Bar.prototype=Object.create(Window_Base.prototype)
VariableProgressBar.Window_Bar.prototype.constructor=VariableProgressBar.Window_Bar
VariableProgressBar.Window_Bar.prototype.initialize=()=>{
  let width=this.windowWidth()
  let height=this.windowHeight()
  let x=this.windowPosition().x
  let y=this.windowPosition().y
  Window_Base.prototype.initialize.call(this,x,y,width,height)
  this.opacity=this.windowOpacity()
}
