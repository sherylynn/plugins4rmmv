let hot_Input = () => {
  let vim=1
  if (!vim) {
    console.log("vim off")
    Input.keyMapper = {
      9: 'tab', // tab
      13: 'ok', // enter
      16: 'shift', // shift
      17: 'control', // control
      18: 'control', // alt
      27: 'escape', // escape
      32: 'space', // space
      33: 'pageup', // pageup
      34: 'pagedown', // pagedown
      37: 'left', // left arrow
      38: 'up', // up arrow
      39: 'right', // right arrow
      40: 'down', // down arrow
      45: 'escape', // insert
      70: 'f', // f
      72: 'h', // h
      81: 'pageup', // Q
      87: 'pagedown', // W
      88: 'escape', // X
      90: 'ok', // Z
      96: 'escape', // numpad 0
      98: 'down', // numpad 2
      100: 'left', // numpad 4
      102: 'right', // numpad 6
      104: 'up', // numpad 8
      120: 'debug' // F9
    }
  } else {
    console.log("vim on")
    /*
      这种方法不够硬核，还是直接传hjkl，然后在场景判断通行，
      可以对图块直接设定文字，然后关于正则来判断是否可以通行
      相当于用html实现了一次部分的vim
    */
    Input.keyMapper = {
      9: 'tab', // tab
      13: 'ok', // enter
      16: 'shift', // shift
      17: 'control', // control
      18: 'control', // alt
      27: 'escape', // escape
      32: 'space', // space
      33: 'pageup', // pageup
      34: 'pagedown', // pagedown
      37: 'left_no', // left arrow
      38: 'up_no', // up arrow
      39: 'right_no', // right arrow
      40: 'down_no', // down arrow
      45: 'escape', // insert
      65: 'a',// a
      66: 'b',//b
      67: 'c',//c
      68: 'd',//d
      69: 'e',//e
      70: 'f', // f
      71: 'g', //g
      72: 'left', // h
      73: 'i',//i
      74: 'down', // j
      75: 'up', // k
      76: 'right', // l
      80: 'p',//p
      81: 'pageup', // Q
      82: 'r', //r
      87: 'pagedown', // W
      88: 'x', // x
      89: 'y', // y
      90: 'ok', // Z
      96: 'escape', // numpad 0
      98: 'down', // numpad 2
      100: 'left', // numpad 4
      102: 'right', // numpad 6
      104: 'up', // numpad 8
      120: 'debug' // F9
    }
  }
}
module.exports = hot_Input
