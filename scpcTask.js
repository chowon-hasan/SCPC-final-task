// This Function takes Strings as input and return reversed version of given strings

const reverseStrings = (inputText) => {
  let stringsContainer = "";
  for (let i = inputText.length - 1; i >= 0; i--) {
    stringsContainer += inputText[i];
  }
  return stringsContainer;
};

const yourText = "Hello World";

const reversedValue = reverseStrings(yourText);
console.log(reversedValue);
