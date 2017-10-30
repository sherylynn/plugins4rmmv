let hot_Scene_Title_new=()=>{
  class Scene_Title_new extends Scene_Base {
    constructor(...args){
      super(...args)
    }
    create(){
      super.create()
      this.createBackground()
      this.createForeground()
      this.createWindowLayer()
      this.createCommandWindow()
    }
    start(){
      super.start()
      SceneManager.clearStack()
      this.centerSprite(this._backSprite1)
      this.centerSprite(this._backSprite2)
      this.playTitleMusic()
      this.startFadeIn(this.fadeSpeed(),false)
    }
    update(){
      if (!this.isBusy()) {
        this._commandWindow.open();
      }
      super.update()
    }
    isBusy(){
      return this._commandWindow.isClosing() || super.isBusy()
    }
    terminate(){
      super.terminate()
      SceneManager.snapForBackground()
    }
    createBackground(){
      this._backSprite1 = new Sprite(ImageManager.loadTitle1($dataSystem.title1Name));
      this._backSprite2 = new Sprite(ImageManager.loadTitle2($dataSystem.title2Name));
      this.addChild(this._backSprite1);
      this.addChild(this._backSprite2);
    }
    createForeground(){
      this._gameTitleSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
      this.addChild(this._gameTitleSprite);
      if ($dataSystem.optDrawTitle) {
        this.drawGameTitle();
      }
    }
  }
  window.Scene_Title_new=Scene_Title_new
}
module.exports=hot_Scene_Title_new
