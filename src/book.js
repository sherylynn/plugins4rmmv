Game_Player.prototype.checkEventTriggerTouch

Game_Player
Bitmap.prototype.drawCircle
Sprite_Base.prototype.look
eventchaseplayer
Game_Interpreter.prototype
$gameMap
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
