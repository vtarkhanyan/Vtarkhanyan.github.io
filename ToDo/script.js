let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function data(name) {
    let a = new Date()
    let day = a.getDate()
    let week = a.getDay()
    let month = a.getMonth()
    let name_data = document.getElementById("name_data")
    name_data.innerHTML = ` ${name.innerText}, ${weekDay[week]}, ${monthName[month]} ${day}`

}

data(name)



let div_left_li = document.querySelectorAll(".div_left_li");

for (let i = 0; i < div_left_li.length; i++) {
    div_left_li[i].addEventListener("click", getDetaInfo)
}

function getDetaInfo() {
    data(this)
}

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const important_fiel = document.getElementById("important_fiel");



function addText(value) {
     let div = document.createElement("div");
    let att = document.createAttribute("class")
    let div1 = document.createElement("div");
    let att1 = document.createAttribute("class")
    let div2 = document.createElement("div");
    let att2 = document.createAttribute("class")
    let div3 = document.createElement("div");
    let att3 = document.createAttribute("class")
    let I = document.createElement("i");
    let att4 = document.createAttribute("class")
    let I1 = document.createElement("i");
    let att5 = document.createAttribute("class")
    let I2 = document.createElement("i");
    let att6 = document.createAttribute("class")
    let att7 = document.createAttribute("id")
     let att8 = document.createAttribute("class")
     let att9 = document.createAttribute("class")
    att.value = "top_fieldset_div"
    div.setAttributeNode(att)
    att1.value = "div_left"
    div1.setAttributeNode(att1)
    div.appendChild(div1)
    att2.value = "div_mid"
    div2.setAttributeNode(att2)
    div.appendChild(div2)
    att3.value = "div_right"
    div3.setAttributeNode(att3)
    div.appendChild(div3)
    att4.value = "far fa-circle"
    I.setAttributeNode(att4)
    att7.value = "check"
    att8.value = "overline"
    att9.value = "bg_color"
    I.setAttributeNode(att7)
       I.addEventListener("click",  check)
    div1.appendChild(I)
    div2.innerText = value
    att5.value = "far fa-edit"
    I1.setAttributeNode(att5)
    div3.appendChild(I1)
    att6.value = "far fa-trash-alt"
    I2.setAttributeNode(att6)
    div3.appendChild(I2)
    console.log(I.getAttribute("class").toString() )
   
    function check() {
        if(I.getAttribute("class") ==="far fa-circle" ){
            att4.value = "fas fa-check"
             div2.classList.toggle("overline");
             div.classList.add("bg_color")
           }else{
            att4.value = "far fa-circle"
               div2.classList.toggle("overline");
               div.classList.toggle("bg_color")
           }
   
    console.log(I)


}

    return div

}

addText()
btn.addEventListener("click", bobo)

function bobo() {
    /*const text = `                  <div class="top_fieldset_div">
                                        <div class="div_left">
                                            <i class="far fa-circle"></i>
                                        </div>
                                        <div class="div_mid">${input.value}</div>
                                        <div class="div_right">
                                            <i class="far fa-edit"></i>
                                            <i class="far fa-trash-alt"></i>
                                        </div>
                                    </div>`; */
    if (input.value) {
        important_fiel.append(addText(input.value))
    }
    input.value = ""

}


