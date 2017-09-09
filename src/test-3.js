class one {
  initialize(){
    console.log(1)
  }
}
class two extends one{
  constructor(...args){
    super(...args)
    this.initialize(...args)
  }
  initialize(x){
    super.initialize()
    console.log(x)
  }
}
let three=new two('测试')
