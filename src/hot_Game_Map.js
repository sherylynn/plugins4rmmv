let hot_Game_Map=()=>{
  //let Gamp_Map_prototype_tileWidth=Game_Map.prototype.tileWidth
  //let Gamp_Map_prototype_tileHeight=Game_Map.prototype.tileHeight
  Object.assign(Game_Map.prototype,{
    tileWidth(){
      return 32
    },
    tileHeight(){
      return 32
    }
  })
}
module.exports=hot_Game_Map
