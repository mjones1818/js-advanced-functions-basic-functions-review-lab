// Your code here
function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*"){
  return function(adjective= 'special') {
    return `You are ${style}${adjective}${style}!`
  }
}

let Calculator = {
  add: function(num1,num2) {return num1+num2},
  subtract: (num1,num2) => {return num1 - num2},
  multiply: (num1,num2) => {return num1 * num2},
  divide: (num1,num2) => {return num1 / num2}
}

function actionApplyer(startingNumber, arrayOfTransforms) {
  if (arrayOfTransforms.length === 0) {
    return startingNumber
  }
  let num = startingNumber
  for (let i=0; i < arrayOfTransforms.length; i++){
    num = arrayOfTransforms[i](num)
  }
  return num
}