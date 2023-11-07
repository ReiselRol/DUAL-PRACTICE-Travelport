const MAX_DIGITS_IN_DISPLAY = 10
const COMMA_CHARACTER = ','
const DISPLAY = document.querySelector('div[name="display"] span')

const BUTTONS = {
  
  symbol: {

    comma: document.getElementsByName('point')[0],
    negate: document.getElementsByName('negate')[0],
    clean: document.getElementsByName('clean')[0],
    divide:  document.getElementsByName('divide')[0],
    multiply: document.getElementsByName('multiply')[0],
    substract: document.getElementsByName('subtract')[0],
    sum: document.getElementsByName('sum')[0],
    equal: document.getElementsByName('equal')[0]

  },
  numbers: {

    zero: document.getElementsByName('zero')[0],
    one: document.getElementsByName('one')[0],
    two: document.getElementsByName('two')[0],
    three: document.getElementsByName('three')[0],
    four: document.getElementsByName('four')[0],
    five: document.getElementsByName('five')[0],
    six: document.getElementsByName('six')[0],
    seven: document.getElementsByName('seven')[0],
    eight: document.getElementsByName('eight')[0],
    nine: document.getElementsByName('nine')[0]

  }

}

let screenNumber = 0
let memoryNumber = 0
let operator = ''

const changeType = {

  toCalculatorString : (number) => {

    return numberToString = number.toString().replace(".", COMMA_CHARACTER)

  },
  toNumber : (numberString) => {

    var stringToNumber = numberString.replace(COMMA_CHARACTER, ".")
    return stringToNumber = parseFloat(stringToNumber)

  }

}

const addToDisplay = (characterToAdd) => {

  console.log(1)
  var screenNumberInString = changeType.toCalculatorString(screenNumber)
  if (check.isNotMaxDigitsLength(screenNumberInString)) {
    if (check.isNotACommaOnThis(screenNumberInString) && characterToAdd === COMMA_CHARACTER) screenNumberInString += characterToAdd
    else if (characterToAdd !== COMMA_CHARACTER) screenNumberInString += characterToAdd

  }

  screenNumber = changeType.toNumber(screenNumberInString)
  setDisplay(screenNumber)

}

const setDisplay = (value) => {

  DISPLAY.innerHTML = value

}

const reset = () => {

  screenNumber = 0
  memoryNumber = 0
  operator = ''
  setDisplay(screenNumber)

}

const check = {

  isNotMaxDigitsLength : (valueToCheck) => {

    valueToCheck = valueToCheck.replace(COMMA_CHARACTER, "")
    valueToCheck = valueToCheck.replace("-", "")
    if (valueToCheck.length >= MAX_DIGITS_IN_DISPLAY) return false
    else return true

  },
  isNotACommaOnThis : (valueToCheck) => {

    if (valueToCheck.includes(COMMA_CHARACTER)) return false
    else return true

  }

}

document.addEventListener('keydown', (event) => {
  event.preventDefault()
  if (event.key === 'Escape' || event.keyCode === 27) reset()
  else if (event.ctrlKey) 1+1
  else if (event.key === '0') addToDisplay(0)
  else if (event.key === '1') addToDisplay(1)
  else if (event.key === '2') addToDisplay(2)
  else if (event.key === '3') addToDisplay(3)
  else if (event.key === '4') addToDisplay(4)
  else if (event.key === '5') addToDisplay(5)
  else if (event.key === '6') addToDisplay(6)
  else if (event.key === '7') addToDisplay(7)
  else if (event.key === '8') addToDisplay(8)
  else if (event.key === '9') addToDisplay(9)
  else if (event.key === COMMA_CHARACTER) addToDisplay(COMMA_CHARACTER)
})

reset()
