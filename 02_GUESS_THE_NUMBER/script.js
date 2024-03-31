const enter_inp = document.querySelector(".enter_inp");
const submit = document.querySelector(".submit");
const restart = document.querySelector(".restart");
const alertBox = document.querySelector(".alert");
const your_guesses = document.querySelector(".your_guesses");

const yourGuesses = [];
let remainingGuesses = 10;

const randomNum = Math.floor(Math.random() * 100);
console.log(randomNum)

submit.addEventListener("submit", (e) => {
  console.log("clicked")
  // e.preventDefault()
  // const enterInpValue = parseInt(enter_inp.value)

  // if( remainingGuesses > 0){
  //   if(enterInpValue > randomNum){
  //     alertBox.innerText = "Too high!"
  //   }else if (enterInpValue < randomNum){
  //     alertBox.innerText = "Too low!"
  //         }else{
  //           alertBox.innerText = "You got it. Congrats!!!"
  //         }
  // } else{
  //   alertBox.innerText = `You lose! Game is over. Then number was ${enterInpValue}`
  // }

  // enterInpValue.reset()

});

restart.addEventListener("click", () => {
  // yourGuesses.length = 0;
  // remainingGuesses = 10;
  // alertBox.textContent = "";
  // your_guesses.textContent = "";
  // enter_inp.value = "";
  // randomNum = getRandomNumber();
});

