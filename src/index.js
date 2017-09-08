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

class Window_MapStatus extends Window_Base{
  constructor(...args){
    super(...args)
    //this.initialize.call(this,...args)
    this.initialize(...args)
    //this.initialize.apply(this, arguments)
  }
}
let _Scene_Map_prototype_createDisplayObject=Scene_Map.prototype.createDisplayObjects
Object.assign(Scene_Map.prototype,{
  createStatusWindow(){
    this._StatusWindows=new Window_MapStatus(0,0,410,216)
    this.addWindow(this._StatusWindows)
  },
  createDisplayObjects(){
    _Scene_Map_prototype_createDisplayObject.call(this)
    this.createStatusWindow()
  }
})
