const input = document.querySelector(".input");
const clearText = document.querySelector(".clearText");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const camelCase = document.getElementById("camelCase");
const snakeCase = document.getElementById("snakeCase");
const pascalCase = document.getElementById("pascalCase");
const kebabCase = document.getElementById("kebabCase");
const trim = document.getElementById("trim");

function toCapitalizeString(str) {
  const firstCharacter = str[0].toUpperCase();
  const remainingCharacter = str.slice(1, str.length);
  const result = firstCharacter + remainingCharacter;
  return result;
  // console.log(result)
}

function toCamelCase(string) {
  const lCaseText = string.toLowerCase();
  const toArray = lCaseText.split(" ");
  // console.log(toArray)
  const result = toArray.map((word, i) => {
    if (i == 0) return word;
    return toCapitalizeString(word);
  });

  const finalResult = result.join("");
  // console.log(finalResult)

  return finalResult;
}

function toSnakeCase(string) {
  const lCaseText = string.toLowerCase();
  const toArray = lCaseText.split(" ");
  const result = toArray.join("_");
  return result;
  // console.log(result)
}

function toPascalCase(string) {
  const lCaseText = string.toLowerCase();
  const toArray = lCaseText.split(" ");
  // console.log(toArray)
  const result = toArray.map((word, i) => {
    return toCapitalizeString(word);
  });

  const finalResult = result.join("");
  // console.log(finalResult)

  return finalResult;
}

function toKebabCase(string) {
  const lCaseText = string.toLowerCase();
  const toArray = lCaseText.split(" ");
  const result = toArray.join("-");
  return result;
  // console.log(result)
}

function toTrim(string) {
  const lCaseText = string.toLowerCase();
  const toArray = lCaseText.split(" ");
  const result = toArray.join("");
  return result;
  // console.log(result)
}

 function updateValues(){
    const textInput = input.value;
  lowerCase.innerText = textInput.toLowerCase();
  upperCase.innerText = textInput.toUpperCase();
  camelCase.innerText = toCamelCase(textInput);
  snakeCase.innerText = toSnakeCase(textInput);
  pascalCase.innerText = toPascalCase(textInput);
  kebabCase.innerText = toKebabCase(textInput);
  trim.innerText = toTrim(textInput);
 }

 updateValues()

input.addEventListener("input",updateValues)

clearText.addEventListener("click",(e)=>{
    e.preventDefault()
    input.value=""
    lowerCase.innerText = ""
    upperCase.innerText = ""
    camelCase.innerText = ""
    snakeCase.innerText = ""
    pascalCase.innerText = ""
    kebabCase.innerText = ""
    trim.innerText = ""
})
