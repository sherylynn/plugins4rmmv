let hot_Window_Bar=()=>{
  class Window_Bar extends Window_Base {
    constructor(character){
      //原来的构造函数就是原来的init
      super(character.screenX()-character._sprite_character()._realFrame.width/2,character.screenY()-character._sprite_character()._realFrame.height*1.5,480,480)
      this._character=character
      //直接绑_xxx=this的模式会影响到保存。换成return that就好
      let that=this
      character._window_bar=()=>{
        return that
      }
      console.log(this)
      //this.initialize.app
      //集成的类似乎不用init也能用？？？？，这样依然会调用修改后的init一次，从console.log可以看出，可能哪里不对
      //原来的写法会执行init2次
      //this.initialize(...args)
    }
    /*
    initialize(character){
      //super.initialize.apply(this, arguments)
      super.initialize.call(this,character._realX,character._realY,480,480)
      this._character=character
      character._window_bar=this
      console.log(this)

    }
    */
    windowLayer_add(){
      SceneManager._scene.addWindow(this)//等同
      //SceneManager._scene._windowLayer.removeChild(this)//结果这个不行
    }
    windowLayer_remove(){
      SceneManager._scene._windowLayer.removeChild(this)

    }
    show(){
      this.windowskin = ImageManager.loadSystem('')
      this.contents.fontSize=12
      this.contents.outlineWidth=0
      this.contents.textColor='red'
      this.contents.fontFace='Arial'
      //this.contents.fontFace='Consolas'
      let hp=this._character._hp?this._character._hp:this._character._sprite_character()._realFrame.width
      let max_hp=this._character._max_hp?this._character._max_hp:this._character._sprite_character()._realFrame.width
      this.drawText('▇'.repeat(hp)+'░'.repeat(max_hp-hp),0,0,48,'left')

    }
    update(){
      this._isWindow=false
      this._margin=0
      this._padding=0
      this.contents.clear()
      //this.move($gamePlayer.screenX()-width/2,$gamePlayer.screenY()-height/2-50,500,500)
      this.move(this._character.screenX()-this._character._sprite_character()._realFrame.width/2,this._character.screenY()-this._character._sprite_character()._realFrame.height*1.5,480,480)
      this.show()
    }
  }
  window.Window_Bar=Window_Bar
}
module.exports=hot_Window_Bar
