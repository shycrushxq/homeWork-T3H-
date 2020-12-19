//ex1 
function isEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
      for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}
//ex2
const flattenArray = (arr) => {
  let result = []
  let tempArr = [...arr]
  while(tempArr.length) {
    const tempItem = tempArr.pop()
      if(Array.isArray(tempItem)) {
        tempArr.push(...tempItem) // 
      } else {
        result.push(tempItem)
      }
  }
  return result.reverse()
}

// ex3 

const cutArr = (arr, num) => {
  let arrRevered = arr.reverse() 
  let tempArr = []
  let result = []
  if(arr.length == 0) {
      return 0
  }
  while( arrRevered.length > num ) {
    for(let i = 0; i < num; i++) {
        tempArr.push(arrRevered.pop())
    }
    /*
     if num = 2, run push() 2 times like: 
    tempArr.push(arrRevered.pop())
    tempArr.push(arrRevered.pop())
    */
      result.push(tempArr.reverse())
      tempArr = []
  }
  result.push(arrRevered)

  return result
}

//ex4
function duplicateitem(arr1, arr2) {
  const result = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          result.push(array1[i])
        }
      }
    }
  return result
  }
// ex5
const equalTime = (item) => {
  let result
  let d = new Date(2020,10,30,12,30,32,0)
  let day = new Date(item)
  let toDay = item.getTime()
  if (toDay > d.getTime()) {
      return result ='after'
  } if (today < d.getTime()) {
      return result = ' before'
  } else {
      return result = 'euqal'
  }
}