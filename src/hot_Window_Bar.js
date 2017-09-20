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
      this.contents.fontSize=24
      this.drawText('测试',0,20,400,'center','#ff0000')

    }
    update(){
      this.contents.clear()
      this.move($gamePlayer.screenX(),$gamePlayer.screenY(),500,500)
      this.show()
    }
  }
  window.Window_Bar=Window_Bar
}
module.exports=hot_Window_Bar
