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
Scene_Boot.prototype.start = function() {
  Scene_Base.prototype.start.call(this);
  SoundManager.preloadImportantSounds();
  if (DataManager.isBattleTest()) {
    DataManager.setupBattleTest();
    SceneManager.goto(Scene_Battle);
  } else if (DataManager.isEventTest()) {
    DataManager.setupEventTest();
    SceneManager.goto(Scene_Map);
  } else {
    this.checkPlayerLocation();
    DataManager.setupNewGame();
    SceneManager.goto(Scene_Splash);
    Window_TitleCommand.initCommandPosition();
  }
  this.updateDocumentTitle();
};

class Scene_Splash extends Scene_Base{
  constructor(...args){
    super(...args)
    this.initialize()
  }
  initialize(){
    super.initialize()
  }
  create(){
    super.create()
    this.logo=new Sprite()
    this.logo.bitmap=ImageManager.loadSystem('GameOver')
    this.addChild(this.logo)
    this.logo.anchor.x=0.5
    this.logo.anchor.y=0.5
    this.logo.x=Graphics.width/2
    this.logo.y=Graphics.height/2
  }
  start(){
    super.start()
    this.startFadeIn(this.slowFadeSpeed(),false)
  }
  stop(){
    super.stop()
    this.fadeOutAll()
  }
  terminate(){
    super.terminate()
    AudioManager.stopAll()
  }
  update(){
    if(this.isActive()&&!this.isBusy() &&(Input.isTriggered('ok')||TouchInput.isTriggered())){
      SceneManager.goto(Scene_Title)
      return
    }
    if(this._wait== undefined){
      this._wait=0
    }
    if(this._wait>=0){
      if(this._wait>=90){
        SceneManager.goto(Scene_Title)
        this._wait=-1
      }else{
        this._wait++
      }
    }
    super.update()
  }
}
