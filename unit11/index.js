//ex 1
const tripleItem = (item, value) => {
  let result = []
  for(let i = 0; i< value; i++) {
  result.push(item)
  }
  return result
}
//ex 2
const converseArray = (arr) => {
  let tempArr = []
  for ( let i = arr.length - 1; i >= 0; i-- ) {
    tempArr.push(arr[i])
  }
  return tempArr
}

// ex3 
//x4

//ex5
const sortArray = (arr) => {
  return arr.sort ( function (a,b) {
    return a-b
  })
}
//ex6 
const checkIsObject = (input) => {
  console.log(typeof input)
  if(typeof input == 'object') {
    return true
  } else {return false}
}
//ex8 
const removeItem = (arr) => {
  if(arr.length < 5) {
    console.log('array have to more than 5 items, please')
  } else {
    arr.splice(1,2)
  return arr
  }
}
//ex 9
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 6.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const result = (student) => {
let  tempArr = []
for(let i = 0 ; i < student.length - 1; i++ ) {
  let nameArray = student[i].name.split(" ") 
  const haveDuy = (element) => element == 'Duy'
  console.log(nameArray.some(haveDuy))
  if(nameArray[1]== 'Duy') {
    tempArr.push('fail')
  }
  if(student[i].score < 5 ) {
    tempArr.push('fail')
  } else {
    tempArr.push('pass')
    }
  }
  return tempArr
}
//ex10
const getResult = (student) => {
  let result = []
  let tempArr = student.map(function(a) {
    return a.score*10
  })
  console.log(tempArr)
  for( let i = 0; i< tempArr.length ; i++) {
    let a = tempArr[i] / 10
    let b =  tempArr[i] % 10
    if( (((Math.floor(a)) + b) % 10 ) > 5) {
      result.push('true')
    } else {
      result.push('fail')
    }
  }
  return result
}