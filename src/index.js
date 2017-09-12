let hot_Game_Interpreter=require('./hot_Game_Interpreter.js')
hot_Game_Interpreter()

if(module.hot){
  module.hot.accept('./hot_Game_Interpreter.js',function () {
    hot_Game_Interpreter=require('./hot_Game_Interpreter.js')
    hot_Game_Interpreter()
  })
}
