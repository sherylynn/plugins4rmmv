let hot_Input=require('./hot_Input')
hot_Input()
let hot_Game_Character=require('./hot_Game_Character')
hot_Game_Character()
let hot_Game_Player=require('./hot_Game_Player')
hot_Game_Player()
let hot_Game_Event=require('./hot_Game_Event')
hot_Game_Event()
let hot_Game_Interpreter=require('./hot_Game_Interpreter.js')
hot_Game_Interpreter()
let hot_Window_Bar=require('./hot_Window_Bar')
hot_Window_Bar()
let hot_Scene_Boot=require('./hot_Scene_Boot')
hot_Scene_Boot()
let hot_Sprite_Character=require('./hot_Sprite_Character')
hot_Sprite_Character()
let hot_Scene_Map=require('./hot_Scene_Map')
hot_Scene_Map()

if(module.hot){
  module.hot.accept('./hot_Game_Event.js',function () {
    hot_Game_Event=require('./hot_Game_Event.js')
    hot_Game_Event()
  })
  module.hot.accept('./hot_Game_Interpreter.js',function () {
    hot_Game_Interpreter=require('./hot_Game_Interpreter.js')
    hot_Game_Interpreter()
  })
  module.hot.accept('./hot_Scene_Boot.js',function () {
    hot_Scene_Boot=require('./hot_Scene_Boot.js')
    hot_Scene_Boot()
  })
  module.hot.accept('./hot_Scene_Map.js',function () {
    hot_Scene_Map=require('./hot_Scene_Map.js')
    hot_Scene_Map()
  })
}
