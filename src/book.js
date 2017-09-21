Game_Player.prototype.checkEventTriggerTouch
DataManager 的一些下载属性其实很适合用来升级
尝试cordova打包，无更新
Scene_Map 中有 Spriteset_Map
Window_Base()
Scene_Map.prototype.createDisplayObjects
Spriteset_map.prototype.createCharacters
Scene_Map.prototype.createSpriteset
let x2 =$gameMap.roundXWithDirection(x, d) 距离 方向一个格子  canPass 是通行判定
let y2 =$gameMap.roundYWithDirection(y, d)
Game_Player
Bitmap.prototype.drawCircle
Sprite_Base.prototype.look
eventchaseplayer
Game_Interpreter.prototype
Game_Interpreter.prototype.command101  执行一些命令 比如显示字
Game_CharacterBase.prototype.moveStraight()
{
  "id": Number($dataMap.events.length),
  "name": "EV001",
  "note": "",
  "pages": [
    {
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
      "directionFix": false,
      "image": {
        "tileId": 0,
        "characterName": "Actor3",
        "direction": 2,
        "pattern": 0,
        "characterIndex": 0
      },
      "list": [
        {
          "code": 0,
          "indent": 0,
          "parameters": []
        }
      ],
      "moveFrequency": 3,
      "moveRoute": {
        "list": [
          {
            "code": 0,
            "parameters": []
          }
        ],
        "repeat": true,
        "skippable": false,
        "wait": false
      },
      "moveSpeed": 3,
      "moveType": 0,
      "priorityType": 1,
      "stepAnime": false,
      "through": false,
      "trigger": 0,
      "walkAnime": true
    }
  ],
  "x": 2,
  "y": 6
}

$gameMap $dataMap
$gameMap保存了生成的事件对象, $dataMap保存着事件对象的基础设定属性
$gameMap.prototype.setupEvents()

//Scene_Map
//掌管地图上的元素
SceneManager._scene._spriteset.children[0]
//地图上人物 //单独改变或者 loadTiteset 不改变绘制
SceneManager._scene._spriteset._characterSprites
//删去显示第一个事件
SceneManager._scene._spriteset._tilemap.children.splice(8,1)
SceneManager._scene._spriteset._tilemap.children.splice(4,1)
SceneManager._scene._spriteset._tilemap.children.push(new Sprite_Character($gameMap._events[1]))
Sprite_Character
//一个个删除 除了第一个是确定的背景，其他的似乎是随机的
Input
Game_Event.prototype.clearPageSettings
Game_Event.prototype.update

this._erased = true;
this.refresh();

$gamePlayer

$gameMap._events //return [null,_event]
$gameMap.events() //return [_event]

Game_CharacterBase.prototype.pos = function(x, y) {
  return this._x === x && this._y === y;
};

var sx = this.deltaXFrom(character.x);
var sy = this.deltaYFrom(character.y);

$gameMap.distance

$gameMap 的类和 基类是stage的scene_map不一样

Game_CharacterBase.prototype.setMoveSpeed
Game_CharacterBase.prototype.checkEventTriggerTouchFront = function(d) {
  var x2 = $gameMap.roundXWithDirection(this._x, d);
  var y2 = $gameMap.roundYWithDirection(this._y, d);
  this.checkEventTriggerTouch(x2, y2);
};
Game_Event.prototype.updateSelfMovement
Game_Event.prototype._self()
this.moveAwayFromPlayer()
Game_Event.prototype.moveTypeTowardPlayer = function() {
  if (this.isNearThePlayer()) {
    switch (Math.randomInt(6)) {
      case 0: case 1: case 2: case 3:
      this.moveTowardPlayer();
      break;
      case 4:
        this.moveRandom();
        break;
      case 5:
        this.moveForward();
        break;
    }
  } else {
    this.moveRandom();
  }
};
Scene_Map
//直接跳转到地图
SceneManager.goto(Scene_Map);
//跳转到splash见 scene_splash
