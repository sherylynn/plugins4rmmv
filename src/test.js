class Test {
  constructor(x=0,y=1){
    this.x=x
    this.y=y
  }
  fuck(){
    return (''+this.x+''+this.y+'')
  }
}
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
console.log(test.fuck())
console.log(test.fuckAgain())

class fuckTest extends Test{
  constructor(...args){
    super(...args)
  }
  fuck(){
    return super.fuck()
  }
}
let fucktest=new fuckTest()
console.log(fucktest.fuck())

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
console.log(inittest.fuck())
console.log(inittest.y)
