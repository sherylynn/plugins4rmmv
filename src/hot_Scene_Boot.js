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
      //npm run dev 时候跳过标题 localhost electron 的时候有标题
      if(window.location.host=='127.0.0.1:8080'){
        //跳过标题
        SceneManager.goto(Scene_Map);
      }else{
        //打开默认标题
        SceneManager.goto(Scene_Title);
      }

      //取消注释关闭标题

      Window_TitleCommand.initCommandPosition();
    }
    this.updateDocumentTitle();
  }
  //强行回开头
  //热加载回去
  //SceneManager.goto(Scene_Title);
}
module.exports=hot_Scene_Boot
