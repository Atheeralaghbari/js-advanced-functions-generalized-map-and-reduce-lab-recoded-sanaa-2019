
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
// array= [1,2,3]


// // generalized map function
// function map(array , myFunc){
    
//     let newArray = []
    
//     array.forEach(element => {
//         newArray.push(myFunc(element))
//     });

//     return newArray;
// }

// function mapToNoChange(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(src[i]) // Unique work
//   }
//   return r
// }
 
// function mapToDouble(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(2 * src[i]) // Unique work
//   }
//   return r
// }
 
// function mapToSquare(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(src[i] * src[i]) // Unique work
//   }
//   return r
// }
// function reduceToTotal(sourceArray, startingPoint=0){
//   for(let i=0;i<sourceArray.length;i++){
//     startingPoint = startingPoint +sourceArray[i] ;
//   }
//   return startingPoint;
// }

// function reduceToAllTrue(sourceArray){
// for(let i=0;i<sourceArray.length;i++){
//     if(sourceArray[i] ===false){
//       return false;
//     }
//   }
//   return true;
// }

// function reduceToAnyTrue(sourceArray){
// for(let i=0;i<sourceArray.length;i++) {
//     if(sourceArray[i] ===true){
//       return true;
//     }
//   }
//   return false;
// }

