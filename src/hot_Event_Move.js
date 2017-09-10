let hot_Event_Move = () => {
  //
  console.log('有更新内容')
  Game_Event.prototype.moveTypeTowardPlayer = function() {
    //if (this.isNearThePlayer()) {
    if ((Math.abs(this._realX-$gamePlayer._realX)+Math.abs(this._realY-$gamePlayer._realY))<=8) {
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
      //this.moveRandom();
    }
  };
  /*
  Object.assign(Game_Event.prototype, {
    moveTypeTowardPlayer() {
      //if (this.isNearThePlayer()) {
      if ((Math.abs(this._realX - $gamePlayer._realX) + Math.abs(this._realY - $gamePlayer._realY)) <= 2) {
        console.log(this._direction)
        switch (Math.randomInt(6)) {
          case 0:
          case 1:
          case 2:
          case 3:
            this.moveTowardPlayer()
            break
          case 4:
            this.moveRandom()
            break
          case 5:
            this.moveForward()
            break
        }
      } else {
        //this.moveRandom()
      }
    }
  })
  */
}
module.exports = hot_Event_Move
