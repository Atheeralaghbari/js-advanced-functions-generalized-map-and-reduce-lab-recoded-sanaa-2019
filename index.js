
// Your code here
src=[2,3,4,5];
function map(src,fun) {
  let r = []
  src.forEach(e=>{r.push(fun(e))});
  return r;
}

 
 
 
 
function reduce(src,fun,startPoint=0){
if(typeof src.reduce(fun,startPoint)=="number"&&startPoint>0){
  return src.reduce(fun,startPoint);
  
}
else{
  return src.reduce(fun);
}
}


