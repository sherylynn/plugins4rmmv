class Test {
  constructor(){
    this.y='yest'
  }
  get x(){
    //console.log(1)
    return this.y
  }
}

let Test_1=new Test()
console.log(Test_1.x)
