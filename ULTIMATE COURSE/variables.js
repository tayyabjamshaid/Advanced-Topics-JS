let likes = 100;
let youTubeChanel = {
  name: "Tayyab Jamshaid",
  subscribers: 10000,
};
const checkStatus = (a, b) => {
  a = 200;
  b.subscribers = 20000;
};
checkStatus(likes, youTubeChanel);

console.log(likes);
console.log(youTubeChanel.subscribers);
