// const number = document.querySelector(".num");
// const numSec = document.querySelector(".second")

// // // const numElement = [];

// // // for (let i = 1; i <= 12; i++) {
// // //     numElement.push(
// // //         `<span style="--index:${i};"><p>${i}</p></span>`
// // //     );
// // // }  

// // // number.insertAdjacentHTML("afterbegin", numElement.join(""));
// // // //console.log(numElement);

// const barSec=[]

// for (let i=1; i<=60; i++){
//     //console.log(i)
//     barSec.push(
//         `<span style="--index:${i};"><p></p></span>`
//     )
    
// }

// numSec.insertAdjacentHTML("afterbegin", barSec.join(""));
// console.log(barSec)


const numSec = document.querySelector(".second");
const total = 60;

for (let i = 0; i < total; i++) {
  numSec.insertAdjacentHTML(
    "beforeend",
    `<span style="--index:${i}"><p></p></span>`
  );
}






const hour=document.querySelector(".hour")
const min=document.querySelector(".min")
const sec=document.querySelector(".sec")

function myTime(){
    let data = new Date();
    let currentHour=data.getHours();
    let currentMin=data.getMinutes();
    let currentSec=data.getSeconds();


    hour.style.transform= `rotate(${currentHour*30+currentMin/2}deg)`
    min.style.transform= `rotate(${currentMin*6}deg)`
    sec.style.transform= `rotate(${currentSec*6}deg)`
}

myTime();

setInterval(myTime,1000)




