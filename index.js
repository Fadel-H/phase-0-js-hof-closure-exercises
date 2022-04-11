function forEach(array, callBack) {
 for (let i = 0; i<array.length; i++){
      callBack(array[i],i, array)
 }
}

function map(array, callBack) {
  const newArray = []

   for (let i=0; i<array.length; i++){
        newArray.push(callBack(array[i]))
   }
   return newArray
}

 function filter(array, callBack) {
  const newArray = []

  for (let item of array){
    if(callBack(item)){
      newArray.push(item)
    }
  }
  return newArray
 }

 function every(array, callBack) {
  
  for (let i =0; i<array.length;i++){
    let bool =null
    bool =callBack(array[i])
  if(!bool){
    return false
  } 
  }return true
}  

function some(array, callBack) {
  
  for (let i =0; i<array.length;i++){
    
  if(callBack(array[i])){
    return true
  } 
  }return false
}  
  

function majority(array, callBack) {
 let counter = 0
  for (let i=0;i<array.length;i++){
if (callBack(array[i])){
  counter += 1
}
  }
if (counter>array.length-counter){
  return true
}
 return false
}
 


function once(callBack) {
  return callBack()
  }

  function groupBy(array, callBack) {
    const Obj = {}
      for(let i=0;i<array.length;i++){
      Obj[callBack(array[i])] = [array[i]]
    } return Obj
    }

function arrayToObject(array, callBack) {
  let Obj = {}
    for (i=0;i<array.length;i++){
    Obj[array[i]]=callBack(array[i])
  }return Obj
  }

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
