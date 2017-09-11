let makeAnimFrames=require('./makeAnimFrames')
//因为很多模块的class互有依赖，但class自己没变量提升，我进行了手动的变量提升
//所以只能加载一个运行一次
//?
let hot_Sprite_Bullet=require('./hot_Sprite_Bullet')
hot_Sprite_Bullet()
let hot_Sprite_Explode=require('./hot_Sprite_Explode')
hot_Sprite_Explode()
let hot_Sprite_Tank=require('./hot_Sprite_Tank')
hot_Sprite_Tank()
let hot_Sprite_Enemy=require('./hot_Sprite_Enemy')
hot_Sprite_Enemy()
let hot_Scene_TankWar=require('./hot_Scene_TankWar')
hot_Scene_TankWar()
let hot_Scene_TankWarTitle=require('./hot_Scene_TankWarTitle')
hot_Scene_TankWarTitle()
let hot_Scene_Boot=require('./hot_Scene_Boot.js')
hot_Scene_Boot()
let hot_Event_Move=require('./hot_Event_Move.js')
hot_Event_Move()


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
  module.hot.accept('./hot_Sprite_Explode.js',function(){
    console.log('有更新')
    hot_Sprite_Explode=require('./hot_Sprite_Explode.js')
    hot_Sprite_Explode()
  })
  module.hot.accept('./hot_Sprite_Tank.js',function(){
    console.log('有更新')
    hot_Sprite_Tank=require('./hot_Sprite_Tank.js')
    hot_Sprite_Tank()
  })
  module.hot.accept('./hot_Sprite_Enemy.js',function(){
    console.log('有更新')
    hot_Sprite_Enemy=require('./hot_Sprite_Enemy.js')
    hot_Sprite_Enemy()
  })
  module.hot.accept('./hot_Scene_TankWar.js',function(){
    console.log('有更新')
    hot_Scene_TankWar=require('./hot_Scene_TankWar.js')
    hot_Scene_TankWar()
  })
  module.hot.accept('./hot_Event_Move.js',function(){
    console.log('有更新')
    hot_Event_Move=require('./hot_Event_Move.js')
    hot_Event_Move()
  })
}



ImageManager.loadTankwar = (filename, hue) => {
  return ImageManager.loadBitmap('img/mndtankwar/', filename, hue, false)
}
