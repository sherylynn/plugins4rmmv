class one {
  constructor(){

  }
  initialize(){
    this.x=1
  }
}
class two extends one{
  constructor(...args){
    super(...args)
    //super.initialize()
  }
  initialize(){
    super.initialize.call(this)
    this.y=1
  }
}
class three extends two{
  constructor(...args){
    super(...args)
    super.initialize.apply(this,arguments)
    super.initialize()
  }
  initialize(){
    super.initialize.call(this)
    this.y=2
    console.log('three')
  }
}
//four和three的差别，一个是init的时候用super.init 一个是init的时候用this.init
//three_1的y是1 four_1的y是2
//es6的继承属性，不用再apply或者call
class four extends three{
  constructor(...args){
    super(...args)
    this.initialize()
  }
  initialize(){
    super.initialize()
    this.z='z'
  }
}
let two_1 =new two()
let three_1=new three()
let four_1=new four()
console.log(two_1.x)
console.log(three_1.x+'&'+three_1.y)
console.log(four_1.y+'&'+four_1.z)
