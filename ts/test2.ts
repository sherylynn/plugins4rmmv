var abc=function(name){
  return this.init(name)
}
abc.prototype={
  init:function(name){
    this.name=name
  }
}

//var test1=new abc('123')

//abc('1')

var obj={
  abc:function(name){
    this.name=name
    return this.name
  },
  name:1
}
obj.abc.call(obj.abc(3))
