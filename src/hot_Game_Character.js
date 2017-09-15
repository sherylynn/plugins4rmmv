let hot_Game_Character=()=>{
  Object.assign(Game_Character.prototype,{
    distanceFromCharacter(character){
      return Math.abs(this.deltaXFrom(character.x)) + Math.abs(this.deltaYFrom(character.y))
    }
  })
}
module.exports=hot_Game_Character
