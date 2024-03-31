const input = document.querySelector(".input");

input.addEventListener("input", (e) => {
  e.preventDefault();
  // console.log(e.target.value)

  const inputValue = e.target.value;
  let previousValue = "";
  const pattern = /\d+$/g;

  if (!pattern.test(input.value)) {
    // If the input does not match the pattern, clear the input
    input.value = inputValue.substring(0, inputValue.length - 1);
  }

  const firstThreeNum = inputValue.substring(0, 3);
  const remainingNum = inputValue.substring(3, inputValue.length);

  if (inputValue.length === 9 && previousValue.length > inputValue.length)  {
    console.log("object")
 
  } else if (inputValue.length === 4 && previousValue.length < inputValue.length) {
  //  input.value = "hi"
  input.value = `+(${firstThreeNum}) - ${inputValue[inputValue.length - 1]}`;

  }

  previousValue = inputValue;
});
