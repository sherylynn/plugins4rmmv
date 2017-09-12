Game_Player.prototype.checkEventTriggerTouch
Bitmap.prototype.drawCircle
Sprite_Base.prototype.look
eventchaseplayer
Game_Interpreter.prototype
$gameMap
Game_CharacterBase.prototype.pos = function(x, y) {
  return this._x === x && this._y === y;
};
Game_CharacterBase.prototype.checkEventTriggerTouchFront = function(d) {
  var x2 = $gameMap.roundXWithDirection(this._x, d);
  var y2 = $gameMap.roundYWithDirection(this._y, d);
  this.checkEventTriggerTouch(x2, y2);
};

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

//直接跳转到地图
SceneManager.goto(Scene_Map);
//跳转到splash见 scene_splash
