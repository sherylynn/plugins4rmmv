/**
 * 精灵表(Sprite Sheet)切帧方法
 * @param texture 精灵表图片
 * @param frameWidth 帧图片的宽度
 * @param frameHeight 帧图片的高度
 * @returns {Array} 帧信息（帧图片在精灵表图片中的坐标、宽度、高度信息）数组
 */
function makeAnimFrames(texture, frameWidth, frameHeight) {
  var rows=parseInt(texture.height/frameHeight);  //包含的帧图片行数
  var cols=parseInt(texture.width/frameWidth);    //包含的帧图片列数
  var animFrames = [];//二维数组，对应于精灵表的各行各列中的每一帧，其每个元素用于存储每行的所有帧信息
  for(var row=0;row<rows;row++) {
    animFrames.push([]);//二维数组的每个元素是一个一维数组
    for (var col=0;col<cols;col++) {
      var frame={ //帧信息，格式如：{x: 0, y: 0, width: 40, height: 40}，表示该帧图片在精灵表中的坐标及尺寸信息
        x: col * frameWidth,
        y: row * frameHeight,
        width: frameWidth,
        height: frameHeight
      };
      animFrames[row].push(frame);//一维数组的每个元素是一个frame帧信息
    }
  }
  return animFrames;
}
module.exports=makeAnimFrames
