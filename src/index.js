let makeAnimFrames=require('./makeAnimFrames')
let hot_Scene_Boot=require('./hot_Scene_Boot.js')
let hot_Scene_TankWarTitle=require('./hot_Scene_TankWarTitle')
let hot_Sprite_Bullet=require('./hot_Sprite_Bullet')
let hot_Sprite_Explode=require('./hot_Sprite_Explode')
hot_Scene_Boot()
hot_Scene_TankWarTitle()
hot_Sprite_Bullet()
hot_Sprite_Explode()
if(module.hot){
  module.hot.accept('./hot_Scene_Boot.js',function(){
    hot_Scene_Boot=require('./hot_Scene_Boot')
    hot_Scene_Boot()
  })
  module.hot.accept('./hot_Scene_TankWarTitle',function(){
    hot_Scene_TankWarTitle=require('./hot_Scene_TankWarTitle')
    hot_Scene_TankWarTitle()
  })
  module.hot.accept('./hot_Sprite_Bullet',function(){
    hot_Sprite_Bullet=require('./hot_Sprite_Bullet')
    hot_Sprite_Bullet()
  })
}



ImageManager.loadTankwar = (filename, hue) => {
  return ImageManager.loadBitmap('img/mndtankwar/', filename, hue, false)
}
