//  TASK - 1
// --------
// This Function takes Strings as input and return reversed version of given strings

const reverseStrings = (inputText) => {
  let stringsContainer = "";
  for (let i = inputText.length - 1; i >= 0; i--) {
    stringsContainer += inputText[i];
  }
  return stringsContainer;
};

// Add your desired text here to see the reversed version
const yourText = "123";
const reversedValue = reverseStrings(yourText);
// console.log(reversedValue);

// -----------------------------

//  TASK - 2
// --------
// This Function takes array as input and return reversed total sum of array only with positive numbers

const arrayCalculator = (inputArrays) => {
  let sum = 0;
  for (let i = 0; i < inputArrays.length; i++) {
    if (inputArrays[i] > 0) {
      sum += inputArrays[i];
    }
  }
  return sum;
};

// add your desired arrays of number here
const myArray = [1, 2, 3, -6, -5];
const totalSum = arrayCalculator(myArray);
// console.log(totalSum);

// ---------------------------------

//  TASK - 3
// --------
// This Function is to find the most frequent element in an array and return it.

const frequentElement = (arr) => {
  let frequentNumbers = {};
  let maxFrequent = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    frequentNumbers[currentElement] =
      (frequentNumbers[currentElement] || 0) + 1;

    if (frequentNumbers[currentElement] > maxFrequent) {
      maxFrequent = frequentNumbers[currentElement];
      item = currentElement;
    }
  }
  return item;
};

const inputArrays = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = frequentElement(inputArrays);
// console.log(result);

// ----------------------------

//  TASK - 4
// --------
// This Function is to takes a sorted array of numbers and a target value as input.

const twoNumbersSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];

      if (sum == target) {
        return [i, j];
      }
    }
  }
  return [];
};

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 12;
const indicatesNumbers = twoNumbersSum(inputArray, targetValue);
// console.log(indicatesNumbers);

// ----------------------------

//  TASK - 5
// --------
// This Function is takes two number and calculate +, -, * , / and return total sum

const calculatorAll = (input1, input2, operators) => {
  if (operators == "+") {
    const addition = input1 + input2;
    return addition;
  } else if (operators == "-") {
    const substract = input1 - input2;
    return substract;
  } else if (operators == "*") {
    const multiply = input1 * input2;
    return multiply;
  } else if (operators == "/") {
    const division = input1 / input2;
    return division;
  } else {
    return "please provide a valid numbers";
  }
};

const inputNumber1 = 5;
const inputNumber2 = 10;
const operators = "/";
const totalSumCalc = calculatorAll(inputNumber1, inputNumber2, operators);
// console.log(totalSumCalc);

// ----------------------------

//  TASK - 6
// --------
// This program that generates a random password of a specified length

const generatePassword = (passLenght) => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = '!@#$%^&*()_-+=[]{}|:;"<>,.?/~';

  const allChar =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";

  for (let i = 0; i < passLenght; i++) {
    const randomNumb = Math.floor(Math.random() * allChar.length);
    password += allChar.charAt(randomNumb);
  }
  return password;
};

const passLength = 15;
const generatePasswordRandom = generatePassword(passLength);
// console.log(generatePasswordRandom);

// ----------------------------

//  TASK - 7
// --------
// This function that converts a Roman numeral to an integer.

const romantoInt = (roNumb) => {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevvalue = 0;

  for (let i = roNumb.length - 1; i >= 0; i--) {
    const currentChar = roNumb[i];
    const currValue = romanNumeralsMap[currentChar];

    if (currValue < prevvalue) {
      result -= currValue;
    } else {
      result += currValue;
    }

    prevvalue = currValue;
  }
  return result;
};

const romanNumber = "XI";

const convertResult = romantoInt(romanNumber);
// console.log(convertResult);

// ----------------------------

//  TASK - 8
// --------
// This function that converts a Roman numeral to an integer.

const secondSmallNumb = (arr) => {
  let small = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (currentNum < small) {
      secondSmall = small;
      small = currentNum;
    } else if (currentNum < secondSmall && currentNum !== small) {
      secondSmall = currentNum;
    }
  }
  return secondSmall;
};

const numbersArray = [5, 2, 8, 3, 10, 9, 4];
const secondSmallestNumber = secondSmallNumb(numbersArray);
// console.log(secondSmallestNumber);
