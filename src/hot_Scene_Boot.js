let hot_Scene_Boot=()=>{
  console.log('一般场景只会在初始化生效')
  Scene_Boot.prototype.start = function () {
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
      //SceneManager.goto(Scene_TankWarTitle)
      //SceneManager.goto(Scene_Title);
      SceneManager.goto(Scene_Map);
      Window_TitleCommand.initCommandPosition();
    }
    this.updateDocumentTitle();
  }
  //强行回开头
  //热加载回去
  //SceneManager.goto(Scene_Title);
}
module.exports=hot_Scene_Boot
