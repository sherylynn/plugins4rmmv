let hot_Game_Player=()=>{
  let Game_Player_prototype_update=Game_Player.prototype.update
  /*
  Game_Player.prototype.update=function () {

    Game_Player_prototype_update.call(this)
  }
  //两种方法在hot加载的环境中都不能再正常运行，人物会卡图
  //测试发现即使不放进去也会卡图
  */
  //error createArray error
  Object.assign(Game_Player.prototype,{
    _Event2TouchInit(){
      //初始化了两个变量来存上一个点击屏幕的事件坐标
      this._Event2TouchX=-1
      this._Event2TouchY=-1
    },
    _startEventByTouch(x,y,triggers,normal){
      if (!$gameMap.isEventRunning()) {
        $gameMap.eventsXy(x, y).forEach(function(event) {
          //把事件触发event._trigger和传入的事件做比较
          console.log(event)
          //不知道Priority是什么，什么东西的优先级？
          //当事件可穿透的时候，可能是优先级相关的
          //if (event._trigger==2 && event.isNormalPriority() === normal) {
          //if (event._trigger==2 ) {//隔空直接触发
          //x或y在线上触发后才触发,角色会先走动到线上,等再次点击才触发
          //或许需要其他方式,比如在move到点的时候触发
          //trigger2时直接触发,0时面向触发
          if (event._trigger==0 && ($gamePlayer._x==x||$gamePlayer._y==y)) {
            event.start()
            $gamePlayer._Event2TouchInit()
          }else if(event._trigger==2){
            event.start()
            $gamePlayer._Event2TouchInit()
          }
        })
      }
    },
    moveByInput() {
      if (!this.isMoving() && this.canMove()) {
        var direction = this.getInputDirection()
        if (direction > 0) {
          $gameTemp.clearDestination()
        } else if ($gameTemp.isDestinationValid()){//还在移动时会进入

          this._Event2TouchX= $gameTemp.destinationX()
          this._Event2TouchY= $gameTemp.destinationY()
          direction = this.findDirectionTo(this._Event2TouchX, this._Event2TouchY)
        }else if(!!this._Event2TouchX&&!!this._Event2TouchY){//两次否定，第一次否定是防止变量未初始化，第二次是为了判断用
          console.log('移动停止')
          this._startEventByTouch(this._Event2TouchX, this._Event2TouchY, 0, true)//停止移动后在之前记录的位置判断是否有事件
        }
        if (direction > 0) {
          this.executeMove(direction)
        }
      }else{
      //  console.log('移动结束')
      }
    },
    update(){
      Game_Player_prototype_update.apply(this,arguments)
      /*
      if(Input.isPressed('control')){
        for(let _e of $gameMap._events){
          if(!_e){

          }else  {
            console.log('有事件')
            if(!_e._erase){
              console.log('没函数')
            }else {
              console.log(_e)
              _e._erase()//
            }
          }
        }
        //console.log($gameMap._events)
        //原来error是出在第一个是空的
      }
      //console.log(1)
      */
    }
  })

}
module.exports=hot_Game_Player
