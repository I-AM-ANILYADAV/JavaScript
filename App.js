// let smallImg = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImg.length; i++) {
//     smallImg[i].src = "C:/JavaScript/Assets/Web_of_Spider-Man_Vol_1_129-1.png";
//     console.log(`value of image no.${i} is changed`);
// }
// console.dir(document.querySelector("H1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll(".box a");
 for( let i =0 ; i <links.length ; i++){
    links[i].style.color = "Yellow";
 }