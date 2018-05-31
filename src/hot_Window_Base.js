let hot_Window_Base=()=>{
  let Window_Base_prototype_initialize=Window_Base.prototype.initialize
  Object.assign(Window_Base.prototype,{
    drawCharacter(characterName, characterIndex, x, y) {
        var bitmap = ImageManager.loadCharacter(characterName);
        var big = ImageManager.isBigCharacter(characterName);
        var pw = bitmap.width / (big ? 7 : 7 * 4);
        var ph = bitmap.height / (big ? 4 : 8);
        var n = characterIndex;
        var sx = (n % 4 * 3 + 1) * pw;
        var sy = (Math.floor(n / 4) * 4) * ph;
        this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
    }
  })
}
module.exports=hot_Window_Base
