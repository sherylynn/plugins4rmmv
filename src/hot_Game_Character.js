let hot_Game_Character=()=>{
  Object.assign(Game_Character.prototype,{
    distanceFromCharacter(character){
      return Math.abs(this.deltaXFrom(character.x)) + Math.abs(this.deltaYFrom(character.y))
    },
    skillCharacter(){
      let id=Number($dataMap.events.length)
      let x=1
      let y=1
      console.log(Number(this._realX+1))
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
        "moveFrequency": 3,
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
