const secondHands= document.querySelector(".seconds");
const minutesHands = document.querySelector(".minutes");
const hoursHands = document.querySelector(".hours");
function setDate(){
   const now= new Date();
   const seconds= now.getSeconds();
   console.log(seconds);
  const secondsDegrees = (seconds*6);
  secondHands.style.transform= `rotate(${secondsDegrees}deg)`;
  const minutes= now.getMinutes();
  const minutesDegrees = (minutes*6);
  minutesHands.style.transform= `rotate(${minutesDegrees}deg)`;
  const hours= now.getHours();
  const hoursDegrees = (hours*30);
  hoursHands.style.transform= `rotate(${hoursDegrees}deg)`;

}
setInterval(setDate,1000);
