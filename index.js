
// Your code here
src=[2,3,4,5];
function mapLike(src,fun) {
  let r = []
  src.forEach(e=>{r.push(fun(e))});
  return r;
}

 
 
 
 
function reduceLike(src,fun,startPoint=0){
if(typeof src.reduceLike(fun,startPoint)=="number"&&startPoint>0){
  return src.reduceLike(fun,startPoint);
  
}
else{
  return src.reduceLike(fun);
}
}


