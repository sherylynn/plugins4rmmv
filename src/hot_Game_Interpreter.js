let hot_Game_Interpreter=()=>{
  Object.assign(Game_Interpreter.prototype,{
    本体(){
      console.log('真实坐标x'+$gameMap._events[this._eventId]._realX)
    }
  })
}
module.exports=hot_Game_Interpreter


//在事件页面直接设定脚本 this.本体() 即可执行
