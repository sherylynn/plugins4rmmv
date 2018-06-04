let hot_Game_Character=()=>{
  Object.assign(Game_Character.prototype,{
    total_frame(){
      // let 行走图帧数=7
      return 9
    },
    maxPattern(){
      return this.total_frame()
    },
    pattern(){
      return this._pattern< this.total_frame() ? this._pattern:1
    },
    updatePattern(){
      if (!this.hasStepAnime() && this._stopCount > 0) {
          //this.resetPattern(); 这里是设置停止的时候的图片序号，默认是1，需要设置为0
          this._pattern=0
      } else {
      this._pattern = (this._pattern + 1) % (this.total_frame() + 1)
      }
  },
    distanceFromCharacter(character){
      return Math.abs(this.deltaXFrom(character.x)) + Math.abs(this.deltaYFrom(character.y))
    },
    runStraight(step=2) {
      this.setMovementSuccess(this.canPass(this._x, this._y, this._direction));
      if (this.isMovementSucceeded()) {
        //this.setDirection(this._direction)
        this._x +=$gameMap.roundXWithDirection(0, this._direction)*step
        this._y +=$gameMap.roundYWithDirection(0, this._direction)*step
        //this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(this._direction))
        //this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(this._direction))
        this.increaseSteps()
      } else {
        //this.setDirection(this._direction)
        this.checkEventTriggerTouchFront(this._direction)
      }
    },
    canJump(x=this._realX, y=this._realY, d=this._direction, step=2) {
      //let x2 = x+ $gameMap.roundXWithDirection(0, d)*(step-1) //其中一种情况会出错
      //let y2 = y+ $gameMap.roundYWithDirection(0, d)*(step-1) //其中一种情况会出错
      let x2 =$gameMap.roundXWithDirection(x, d)
      let y2 =$gameMap.roundYWithDirection(y, d)
      /*//第一个判定决定是否能越过物体,加了判定等后，有时候会卡住不能释放
      if (!this.canPass(x,y,d)) {
        return false
      }
      */
      if (!this.canPass(x2,y2,d)) {
        return false
      }
      return true
    },
    /*
    canJump(x, y, d, step=2) {
      let x2 = x+ $gameMap.roundXWithDirection(0, d)*step
      let y2 = y+ $gameMap.roundYWithDirection(0, d)*step
      if (!$gameMap.isValid(x2, y2)) {
        return false
      }
      if (this.isThrough() || this.isDebugThrough()) {
        return true
      }
      if (!this.isMapPassable(x, y, d)) {
        return false
      }
      if (this.isCollidedWithCharacters(x2, y2)) {
        return false
      }
      return true;
    },
    */
    jumpStraight (d=this._direction) {
      this.setMovementSuccess(this.canJump(this._x, this._y, d))
      if (this.isMovementSucceeded()) {
        this.setDirection(d)
        this.skillJump(d)
      } else {
        this.setDirection(d)
        this.checkEventTriggerTouchFront(d)
      }
    },
    skillJump(d=this._direction,step=2){
      if(!this.isJumping()){
        switch(d){
          case 8:
            this.jump(0,-1*step)
            break
          case 2:
            this.jump(0,1*step)
            break
          case 4:
            this.jump(-1*step,0)
            break
          case 6:
            this.jump(1*step,0)
            break
        }
      }
    },
    isSkilling(){

    },
    skillCharacter(){
      let id=Number($dataMap.events.length)
      let x=Number($gameMap.roundXWithDirection(this._x, this._direction))
      let y=Number($gameMap.roundYWithDirection(this._y, this._direction))
      //let y=Number(this._realY+1)
      //伪造生成初始的地图上事件数据
      //然后在实际的地图中依据数据生成事件
      //用事件生成加入场景中的精灵集中的角色土块
      //push的值应该用类来生成,并且用this.x来使用
      $dataMap.events.push({
        "id": id,
        "name": "EV00"+id,
        "note": "",
        "pages": [{
        "conditions": {
          "actorId": 1,
          "actorValid": false,
          "itemId": 1,
          "itemValid": false,
          "selfSwitchCh": "A",
          "selfSwitchValid": false,
          "switch1Id": 1,
          "switch1Valid": false,
          "switch2Id": 1,
          "switch2Valid": false,
          "variableId": 1,
          "variableValid": false,
          "variableValue": 0
        },
        "directionFix": true,
        "image": {
          "tileId": 0,
          "characterName": "!Door2",
          "direction": 8,
          "pattern": 0,
          "characterIndex": 0
        },
        "list": [{
          "code": 0,
          "indent": 0,
          "parameters": []
        }],
        "moveFrequency": 10,
        "moveRoute": {
          "list": [{
            "code": 0,
            "parameters": []
          }],
          "repeat": true,
          "skippable": false,
          "wait": false
        },
        "moveSpeed": 3,
        "moveType": 2,
        "priorityType": 1,
        "stepAnime": true,
        "through": true,
        "trigger": 0,
        "walkAnime": true
      }],
        "x": x,
        "y": y
      })
      $gameMap._events.push(new Game_Event($gameMap._mapId, id))
      SceneManager._scene._spriteset._tilemap.addChild(new Sprite_Character($gameMap._events[$gameMap._events.length-1]))
    }
  })
}
module.exports=hot_Game_Character
