const setOfWords = [
  "My name is Tayyab and i am a developer",
  "Hope you are having fun this is a simple game you can make",
  "If you want the source code than link is given in  the description boz so you can create your own website",
];
const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
  } else {
  }
});
const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  console.log(randomNumber);
};
