let hot_Scene_Map=()=>{
  let Scene_Map_prototype_update=Scene_Map.prototype.update
  let Scene_Map_createAllWindows=Scene_Map.prototype.createAllWindows
  Object.assign(Scene_Map.prototype,{
    disFromCharacter(character_1,character_2){
      return Math.abs(this.deltaX(character_1._realX, character_2._realX)) + Math.abs(this.deltaY(character_1._realY, character_2._realY))
      //实际上没有this,因为Scene_Map不是$gameMap
    },
    //改写了原生的窗口加载，实现加载的血条，现在可以去掉
    createAllWindows(){
      Scene_Map_createAllWindows.call(this)
      console.log('加载Winbar')
      if(true){
        //因为影响到了保存，所以把血条系统关掉，似乎是在遍历的时候遍历不到什么所以没法保存？不知道
        this.addWindow(new Window_Bar($gamePlayer))
        for(let _e of $gameMap.events()){
          this.addWindow(new Window_Bar(_e))
        }}
    },
    //鼠标触发事件
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
          }else if(event._trigger==2){
            event.start()
          }
        })
      }
    },
    //地图检索触控事件
    processMapTouch(){
      let triggers_默认事件=2 //鼠标默认点击触发“事件接触”事件
      //0时需要坐标一致才鼠标触发
      if (TouchInput.isTriggered() || this._touchCount > 0) {
        if (TouchInput.isPressed()) {
          if (this._touchCount === 0 || this._touchCount >= 15) {
            var x = $gameMap.canvasToMapX(TouchInput.x)
            var y = $gameMap.canvasToMapY(TouchInput.y)
            //引用了我的方法
            //先不开启，换成在Game_player类中开启，结合移动
            //-----------------------------------------------------------------!!!!!!!!!
            //this._startEventByTouch(x, y, triggers_默认事件, true)
            $gameTemp.setDestination(x, y)
          }
          this._touchCount++
        } else {
          this._touchCount = 0
        }
      }
    },
    update(){
      //Scene_Map_prototype_update.call(this)
      //响应按钮跳跃  问题是还没把视角移动，并且边界判定
      //console.log(1)
      if(Input.isPressed('space')){
        $gamePlayer.jumpStraight()


        //响应按钮删掉所有事件
        //console.log($gameMap._events)
        /*
        for(let _e of $gameMap._events){
          if(!!_e){
            _e.erase()//是自己函数名写错了,erase没有下划线
            //_e._erased = true//有问题，根本这类的属性都没有了
            //_e.refresh()//由于事件列表的第一个是空函数，所以不行 //直接 _erase的方法不见了，只能用次一级的方法
          }
        }
        */


        //$gameMap._events[2].clearPageSettings()
        //压根不生效，可能和场景自己的update冲突或者在this的获得有问题，因为总是undefined
        //$gameMap._events.splice(2,1)
        //$gameMap._events[2].erase()
        //console.log($gameMap)
        /*
        for(let _e of $gameMap._events){
          if(typeof(_e._erase)=="undefined"){
            _e._erase()
          }
        }
        */
        /*
        for(let i=0;i<=$gameMap._events.length;i++){
          console.log(i)
          $gameMap._events[i]._erase()
        }
        */
      }
      if(Input.isPressed('shift')){
        if(!$gamePlayer.isMoving()){
          //$gamePlayer.moveTowardCharacter()
          $gamePlayer.setMoveSpeed(6)
          $gamePlayer.moveStraight($gamePlayer._direction)
          /*
          switch($gamePlayer._direction){
            case 8:
              $gamePlayer.jump(0,-2)
              break
            case 2:
              $gamePlayer.jump(0,2)
              break
            case 4:
              $gamePlayer.jump(-2,0)
              break
            case 6:
              $gamePlayer.jump(2,0)
              break
          }
          */
        }

        //响应按钮删掉所有事件
        //console.log($gameMap._events)
        /*
        for(let _e of $gameMap._events){
          if(!!_e){
            _e.erase()//是自己函数名写错了,erase没有下划线
            //_e._erased = true//有问题，根本这类的属性都没有了
            //_e.refresh()//由于事件列表的第一个是空函数，所以不行 //直接 _erase的方法不见了，只能用次一级的方法
          }
        }
        */


        //$gameMap._events[2].clearPageSettings()
        //压根不生效，可能和场景自己的update冲突或者在this的获得有问题，因为总是undefined
        //$gameMap._events.splice(2,1)
        //$gameMap._events[2].erase()
        //console.log($gameMap)
        /*
        for(let _e of $gameMap._events){
          if(typeof(_e._erase)=="undefined"){
            _e._erase()
          }
        }
        */
        /*
        for(let i=0;i<=$gameMap._events.length;i++){
          console.log(i)
          $gameMap._events[i]._erase()
        }
        */
      }
      if(Input.isPressed('control')){
        SceneManager._scene._spriteset._tilemap.children.splice(8,1)
        //console.log($gameMap.disFromCharacter($gamePlayer,$gameMap.events()[0]))
        if(!$gamePlayer.isMoving()){
          //$gamePlayer.moveTowardCharacter()
          //$gamePlayer.turnTowardCharacter()
          //$gameMap._event[1]

        }
      }
      if(Input.isPressed('f')){
        console.log(1)
        let animation=$dataAnimations[3]
        var name1 = animation.animation1Name
        var name2 = animation.animation2Name
        var hue1 = animation.animation1Hue
        var hue2 = animation.animation2Hue
        ImageManager.requestAnimation(name1, hue1)
        ImageManager.requestAnimation(name2, hue2)

      }
      if(Input.isPressed('h')){

        $gamePlayer.skillCharacter()

      }
      Scene_Map_prototype_update.call(this)

    },
  })
}
module.exports=hot_Scene_Map
