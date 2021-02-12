const dayTag = document.querySelector('#days')
const hourTag = document.querySelector('#hours')
const minuteTag = document.querySelector('#minutes')
const secondTag = document.querySelector('#seconds')


let date = new Date("Feb 21, 2021 3:37:25").getTime();

console.log(date)

let interval = setInterval(() => {


let now = new Date().getTime();
let distance = date - now


let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);


dayTag.innerHTML = days
hourTag.innerHTML = hours
minuteTag.innerHTML = minutes
secondTag.innerHTML = seconds



}, 1000)








