
let weekDay = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
let monthName = ["January", "February", "March", "April","May","June","July","August", "September", "October", "November", "December"]

function data(name){
    let a = new Date()
    let day = a.getDate()
    let week = a.getDay()
    let month = a.getMonth()
    let name_data = document.getElementById("name_data")
    name_data.innerHTML = ` ${name.innerText}, ${weekDay[week]}, ${monthName[month]} ${day}`
 
}


let  div_left_li = document.querySelectorAll(".div_left_li");
 
div_left_li[0].addEventListener("click", bobo)
div_left_li[1].addEventListener("click", bobo)
function bobo(x){
    console.log(x.target)
     data(x.target)
    let section_div_right = document.getElementById("section_div_right");
    section_div_right.innerHTML = "dsfscsd"
}

