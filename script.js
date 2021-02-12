const dayTag = document.querySelector('#days')
const hourTag = document.querySelector('#hours')
const minuteTag = document.querySelector('#minutes')
const secondTag = document.querySelector('#seconds')
const secondAreaTag = document.querySelector('#box-seconds')
const minuteAreaTag = document.querySelector('#box-minutes')
const hourAreaTag = document.querySelector('#box-hours')
const daysAreaTag = document.querySelector('#box-days')



TweenMax.staggerFrom('.launching', 5, {
    x: 2000,
    opacity: 0,
    ease:Elastic.easeOut,
}, 0.2);




var tl = new TimelineMax({paused:false});




tl.to('.time-area', 0.3, { autoAlpha:1 })
.staggerFromTo('.date-name', 0.3, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.1);

tl.to('.time-area', 0.1, { autoAlpha:1 })
.staggerFromTo('.date-number-box', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.1);


tl.to('.footer', 0.3, { autoAlpha:1 })
.staggerFromTo('a', 0.3, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.1);




let secondsLeft = 59;
let secondTimer = setInterval(() => {
  if(secondsLeft === 0){
    secondsLeft = 60;
  }
  secondsLeft -= 1;

    secondAreaTag.classList.add('animation-on-seconds')
  secondTag.innerHTML = secondsLeft

}, 1000);


setTimeout( () => { 
    clearInterval( secondTimer ); 
}, 86400000);












let minutesLeft = 59;
let minuteTimer = setInterval(() => {
  if(minutesLeft === 1 ){
    minutesLeft = 59;
    
  }
    minutesLeft -= 1;


  minuteTag.innerHTML = Math.floor(minutesLeft)


}, 60000);

setTimeout( () => { 
    clearInterval( minuteTimer ); 
}, 86400000);


setInterval(() => {
    minuteAreaTag.classList.add('animation-on')
  }, 60000);



setInterval(() => {
    minuteAreaTag.classList.remove('animation-on')
}, 61000);













let hoursLeft = 23;
let hourTimer = setInterval(() => {
    if(hoursLeft === 0){
        hoursLeft = 23;
      }
  hoursLeft -= 1 



  hourTag.innerHTML = Math.floor(hoursLeft)

}, 3600000);

setTimeout( () => { 
    clearInterval( hourTimer ); 
}, 86400000);


setInterval(() => {
    hourAreaTag.classList.add('animation-on')
  }, 3600000);



setInterval(() => {
    hourAreaTag.classList.remove('animation-on')
}, 3800000);













let daysLeft = 13;
let dayTimer = setInterval(() => {
    if(daysLeft === 0){
        clearInterval(dayTimer);
      }
  daysLeft -= 1 


  dayTag.innerHTML = Math.floor(daysLeft)

}, 86400000);


setInterval(() => {
    daysAreaTag.classList.add('animation-on')
  }, 86400000);



  setInterval(() => {
    daysAreaTag.classList.remove('animation-on')
  }, 86500000);











