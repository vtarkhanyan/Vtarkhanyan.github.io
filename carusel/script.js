let color = ["rgb(11,11,11)","rgb(185,70,67)","rgb(107,150,203)", "rgb(153,49,21)", "rgb(65,100,155)","rgb(11,11,11)","rgb(136,9,29)","rgb(21,43,121)","rgb(88,134,184)"]
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const container = document.getElementById("container");
const icon = document.getElementById("icon");
const img = document.createElement("img");
const attr = document.createAttribute("src");
let circle 
attr.value = `img/${0}.png`;
img.setAttributeNode(attr);
container.appendChild(img);
nextBtn.addEventListener("click", next);
nextBtn.addEventListener("click", stop);
prevBtn.addEventListener("click", prev);
prevBtn.addEventListener("click", stop);
let arr = Array(9);
let i = 0;

function next() {

    i++
    console.log(i)
   for(let j = 0; j<circle.length; j++){
       circle[j].style.border = "1px solid black"; 
   }
     if (i > arr.length-1) {
        i = 0
    }

    attr.value = `img/${i}.png`
    circle[i].style.border = "2px solid red";
    console.log(nextBtn.onclick)
};
function prev() {
    i--
     for(let j = 0; j<circle.length; j++){
       circle[j].style.border = "1px solid black"; 
   }
    if (i < 0) {
        i = 8
    }
    attr.value = `img/${i}.png`
    circle[i].style.border = "2px solid red";

};
for(let i = 0; i<arr.length; i++){
    let div = document.createElement("div");
    let attrDiv = document.createAttribute("class");
    attrDiv.value = "circle"
    div.setAttributeNode(attrDiv);
    
    div.style.backgroundColor = color[i]
    icon.appendChild(div)

}

circle =document.querySelectorAll(".circle")
 circle[0].style.border = "2px solid red" 
for(let i = 0; i<circle.length; i++){
    circle[i].addEventListener("click", border)
}
let targetID 
function border(e){
    console.log(e.target==circle[1])
 for(let j = 0; j<circle.length; j++){
       circle[j].style.border = "1px solid black"; 
     if(e.target==circle[j]){
        console.log(e.target==circle[j])
          attr.value = `img/${j}.png`
          i =j
     }
   }
         e.target.style.border = "2px solid red" 
          
}

window.addEventListener("load", func);
let interval
function func(){
    
  interval= setInterval(next, 1000);
    return interval
 }
function stop(){
    
  clearInterval(interval);
 }

