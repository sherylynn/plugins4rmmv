let hot_Game_Event=()=>{
  Object.assign(Game_Event.prototype,{
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
        }
      }
    }
  })
}
module.exports=hot_Game_Event
