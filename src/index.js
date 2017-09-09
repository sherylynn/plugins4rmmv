let hot=require('./hot.js')
import hot2 from './hot2.js'
window.hot=hot
//后面的这个函数只响应了一次
if(module.hot){
  console.log('有热加载')
  module.hot.accept('./hot.js',function(){
    console.log('hot.js有热加载')
    hot=require('./hot.js')//采用了node热加载时候的写法
    hot()
  })
  module.hot.accept('./hot2.js',function(){
    console.log('hot.js有热加载')//采用了官方的写法，另外发现如果不写module.hot.accept，就会默认直接刷新浏览器
    hot2()
  })
}
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
    //SceneManager.goto(Scene_Title);
    SceneManager.goto(Scene_Map);
    Window_TitleCommand.initCommandPosition();
  }
  this.updateDocumentTitle();
};


ImageManager.loadTankwar = (filename, hue) => {
  return ImageManager.loadBitmap('img/mndtankwar/', filename, hue, false)
}
