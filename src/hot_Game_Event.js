let hot_Game_Event=()=>{
  Object.assign(Game_Event.prototype,{
    JumpTypeRandom() {
      switch (Math.randomInt(6)) {
        case 0: case 1:
        this.JumpRandom();
        break;
        case 2: case 3: case 4:
        this.jumpStraight();
        break;
        case 5:
          this.resetStopCount();
          break;
      }
    },
    JumpRandom() {
      var d = 2 + Math.randomInt(4) * 2;
      if (this.canJump(this.x, this.y, d)) {
        this.skillJump(d);
      }
    },
    updateSelfMovement() {
      if (!this._locked && this.isNearTheScreen() &&
      this.checkStop(this.stopCountThreshold())) {
        switch (this._moveType) {
          case 1:
            this.moveTypeRandom()
            break;
          case 2:
            this.moveTypeTowardPlayer()
            break;
          case 3:
            this.moveTypeCustom()
            break;
          case 4:
            this.moveAwayFromPlayer()
            break
          case 5:
            this.JumpTypeRandom()
            break
        }
      }
    },
    /*
    update(){
      Game_Character.prototype.update.call(this);
      this.checkEventTriggerAuto();
      this.updateParallel();
      this._erased = true;
      this.refresh();
    }
    */
  })
}
module.exports=hot_Game_Event
