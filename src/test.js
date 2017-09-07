class Test {
  constructor(x=0,y=1){
    this.x=x
    this.y=y
  }
  fuck(){
    return (''+this.x+''+this.y+'')
  }
  mother(a){
    console.log(a)
    return (this.y+a)
  }
}
//重写了父类的方法，用了assign
let fuck_prototype=Test.prototype.mother
Object.assign(Test.prototype,{
  fuck(){
    return 5
  },
  your(){
    return (this.x*this.y)
  },
  mother(a){
    fuck_prototype.call(this,a)
    console.log('test')
  }
})
let assignTest=new Test()
//console.log(assignTest.fuck())
//console.log(assignTest.your(10,5))
assignTest.mother('mother')

class newTest extends Test{
  constructor(x,y,color='green'){
    super(x,y)
    this.color=color
  }
  fuckAgain(){
    return( this.color )
  }
}
let test=new newTest()
//console.log(test.fuck())
//console.log(test.fuckAgain())

class fuckTest extends Test{
  constructor(...args){
    super(...args)
  }
  fuck(){
    return super.fuck()
  }
}
let fucktest=new fuckTest()
//console.log(fucktest.fuck())


//继承 初始化
class initTest extends Test{
  constructor(...args){
    super(...args)
  }
  initialize(){
    console.log(1)
  }
}
class fuckInitTest extends initTest{
  constructor(...args){
    super(...args)
    super.initialize()
  }
}
let inittest=new fuckInitTest()
//console.log(inittest.fuck())
//console.log(inittest.y)
