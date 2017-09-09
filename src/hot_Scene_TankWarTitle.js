let hot_Scene_TankWarTitle=()=>{
  class Scene_TankWarTirle extends Scene_Base {
    constructor(...args){
      super(...args)
      this.initialize(...args)
    }
    create(){
      super.create()
      this._backgroundSprite=new Sprite(ImageManager.loadTankwar('TitleBack'))
      this.addChild(this._backgroundSprite)
      this._logo=new Sprite(ImageManager.loadTankwar('Logo'))
      this._logo.anchor=new Point(0.5,0.5)
      this._logo.x=Graphics.boxWidth/2
      this._logo.y=Graphics.boxHeight/2
      this.addChild(this._logo)
    }
    update(){
      super.update()
      if(Input.isTriggered('ok')||TouchInput.isTriggered()){
        SceneManager.goto(Scene_TankWar)
      }
    }
  }
}
module.exports=hot_Scene_TankWarTitle
