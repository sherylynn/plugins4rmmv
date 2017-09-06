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

VariableProgressBar._Scene_Map_createAllWindows =Scene_Map.prototype.createAllWindows
Scene_Map.prototype.createAllWindows=()=>{
  VariableProgressBar._Scene_Map_createAllWindows.call(this)
  this.addChild(new VariableProgressBar.Window_Bar())
}
VariableProgressBar.Window_Bar=()=>{
  this.initialize.apply(this,arguments)
}
