let hot_Window_Bar=()=>{
  class Window_Bar extends Window_Base {
    constructor(...args){
      super(...args)
      //this.initialize.app
      this.initialize(...args)
    }
    initialize(){
      super.initialize.apply(this, arguments)
      console.log(this)
    }
    show(){
      this.windowskin = ImageManager.loadSystem('')
      this.contents.fontSize=12
      this.contents.outlineWidth=0
      this.contents.textColor='red'
      this.contents.fontFace='Arial'
      //this.contents.fontFace='Consolas'
      this.drawText('▇▇▇▇▇▇▇▇▇░░░░░░',0,0,50,'left')

    }
    update(){
      let width=50
      let height=50
      this._isWindow=false
      this._margin=0
      this._padding=0
      this.contents.clear()
      this.move($gamePlayer.screenX()-width/2,$gamePlayer.screenY()-height/2-70,width,height)
      this.show()
    }
  }
  window.Window_Bar=Window_Bar
}
module.exports=hot_Window_Bar
