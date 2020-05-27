let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function data(name) {
    let a = new Date()
    let day = a.getDate()
    let week = a.getDay()
    let month = a.getMonth()
    let name_data = document.getElementById("name_data")
    name_data.innerHTML = ` ${name}, ${weekDay[week]}, ${monthName[month]} ${day}`

}

data("Today")



let div_left_li = document.querySelectorAll(".div_left_li");

for (let i = 0; i < div_left_li.length; i++) {
    div_left_li[i].addEventListener("click", getDetaInfo)
}

function getDetaInfo() {
    data(this.innerText)
}

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const important_fiel_div = document.getElementById("important_fiel_div");
const casual_fiel_div = document.getElementById("casual_fiel_div");


function addText(value, icon, icontext, date) {
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
    let I3 = document.createElement("i");
     let att10 = document.createAttribute("class")
      
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
    att10.value = icon
    I.setAttributeNode(att7)
    I.addEventListener("click", check)
    div1.appendChild(I)
    div2.innerText = value
    I3.setAttributeNode(att10)
    
      div3.appendChild(I3)
    I3.textContent= icontext
    
    
    att5.value = "far fa-edit"
    I1.setAttributeNode(att5)
    div3.appendChild(I1)
    att6.value = "far fa-trash-alt"
    I2.setAttributeNode(att6)
    div3.appendChild(I2)
  

    function check() {
        if (I.getAttribute("class") === "far fa-circle") {
            att4.value = "fas fa-check"
            div2.classList.toggle("overline");
            div.classList.add("bg_color")
        } else {
            att4.value = "far fa-circle"
            div2.classList.toggle("overline");
            div.classList.toggle("bg_color")
        }

  


    }

    return div

}


let textarea1 =  ""
function addTask(value) {
    let div = document.createElement("div");
    let att = document.createAttribute("class");
    let att1 = document.createAttribute("id");
     att.value = "div_right_top_add";
    att1.value = "getContent";
    div.setAttributeNode(att);
    div.setAttributeNode(att1);
   
    let label = document.createElement("label");
    label.textContent = " Importance: ";
     div.appendChild(label)
   let input = document.createElement("input");
    let att2 = document.createAttribute("type")
    let att3 = document.createAttribute("id");
    let att4 = document.createAttribute("name");
    let att5 = document.createAttribute("value");
    att2.value = "radio"
    att3.value = "important"
    att4.value = "importance"
    att5.value = "important"
    input.setAttributeNode(att2);
    input.setAttributeNode(att3);
    input.setAttributeNode(att4);
    input.setAttributeNode(att5);
    label.appendChild(input)
  
    let label1 = document.createElement("label");
    label1.textContent = " Important ";
    label.appendChild(label1)
     let input1 = document.createElement("input");
     let att14 = document.createAttribute("type")
    let att6 = document.createAttribute("id");
    let att15 = document.createAttribute("name");
    let att7 = document.createAttribute("value");
    let att28 = document.createAttribute("checked");
     att14.value = "radio"
    att6.value = "casual"
     att15.value = "importance"
    att7.value = "casual"
    
    input1.setAttributeNode(att14);
    input1.setAttributeNode(att6);
    input1.setAttributeNode(att15);
    input1.setAttributeNode(att7);
    input1.setAttributeNode(att28);
    label.appendChild(input1);
    let br2 = document.createElement("br");
    div.appendChild(br2)
     let label5 = document.createElement("label");
    label5.textContent = " Categoris: ";
     div.appendChild(label5)
    let label4 = document.createElement("label");
    label4.textContent = " Work ";
    label5.appendChild(label4)
    let input3 = document.createElement("input");
     let att16 = document.createAttribute("type")
    let att17 = document.createAttribute("id");
    let att18 = document.createAttribute("name");
    let att19 = document.createAttribute("value");
     att16.value = "radio"
    att17.value = "work"
     att18.value = "categoris"
    att19.value = "work"
    
    input3.setAttributeNode(att16);
    input3.setAttributeNode(att17);
    input3.setAttributeNode(att18);
    input3.setAttributeNode(att19);
    label5.appendChild(input3);
    
    let label6 = document.createElement("label");
    label6.textContent = " Personal ";
    label5.appendChild(label6)
    let input4 = document.createElement("input");
     let att20 = document.createAttribute("type")
    let att21 = document.createAttribute("id");
    let att22 = document.createAttribute("name");
    let att23 = document.createAttribute("value");
     let att29 = document.createAttribute("checked");
     att20.value = "radio"
    att21.value = "personal"
     att22.value = "categoris"
    att23.value = "personal"
    
    input4.setAttributeNode(att20);
    input4.setAttributeNode(att21);
    input4.setAttributeNode(att22);
    input4.setAttributeNode(att23);
    input4.setAttributeNode(att29);
    label6.appendChild(input4);
    
     let label7 = document.createElement("label");
    label7.textContent = " Other ";
    label5.appendChild(label7)
    let input5 = document.createElement("input");
     let att24 = document.createAttribute("type")
    let att25 = document.createAttribute("id");
    let att26 = document.createAttribute("name");
    let att27 = document.createAttribute("value");
     att24.value = "radio";
    att25.value = "other";
     att26.value = "categoris";
    att27.value = "other";
    
    input5.setAttributeNode(att24);
    input5.setAttributeNode(att25);
    input5.setAttributeNode(att26);
    input5.setAttributeNode(att27);
    label7.appendChild(input5);
    
    
    
    
      let label2 = document.createElement("label");
    label2.textContent = " Casual ";
        label.appendChild(label2);
     let br1 = document.createElement("br");
    div.appendChild(br1)
    let label3 = document.createElement("label");
    label3.textContent = " Scheduled time: ";
     div.appendChild(label3)
    let input2 = document.createElement("input");
    let att8 = document.createAttribute("type");
    let att9 = document.createAttribute("id");
    let att10 = document.createAttribute("name");
 
    att8.value = "date"
    att9.value = "dueto"
    att10.value = "dueto"
   
    input2.setAttributeNode(att8);
    input2.setAttributeNode(att9);
    input2.setAttributeNode(att10);
 input2.required = true;
    input2.value = "bjbjbj"
    div.appendChild(input2)
    let br = document.createElement("br");
    div.appendChild(br)
    let span = document.createElement("span");
    span.textContent = " Add tasks: ";
    div.appendChild(span)
    let textarea = document.createElement("textarea");
    let att11 = document.createAttribute("id");
    let att12 = document.createAttribute("rows");
    let att13 = document.createAttribute("cols");
    att11.value = "inputValue"
    att12.value = "5"
    att13.value = "30"
    textarea.setAttributeNode(att11);
    textarea.setAttributeNode(att12);
    textarea.setAttributeNode(att13);
    div.appendChild(textarea) 
    textarea1 = document.getElementById("inputValue")
  
return div

}



let section_div_right = document.getElementById("section_div_right")

btn1.addEventListener("click", bobo1)

function bobo1() {
           important_fiel_div.innerHTML = addTask().outerHTML
            casual_fiel_div.innerHTML = ""
                console.log(addTask())

}




btn.addEventListener("click", bobo)
let list = [];
let today = []
 let todayID = document.getElementById("today")
  todayID.textContent=today.length
function bobo() {
let bobo2 = document.getElementById("dueto");
    
let bobo3 = document.getElementById("important");
let bobo4 = document.getElementById("casual");
 let bobo5 = document.getElementById("work");
let bobo6 = document.getElementById("personal");
    let bobo7 = document.getElementById("other");
    

    console.log(bobo3.checked )
   if (textarea1.value) {
       console.log(bobo2.value)
            let obj = {}
            obj["text"] = textarea1.value;
            if(bobo3.checked){
                  obj["importance"] = bobo3.value;
                
            }else{
                obj["importance"] = bobo4.value;
            }
          
            obj["date"] = bobo2.value;
             if(bobo5.checked){
                  obj["categoris"] = bobo5.value;
                
              
            }else if(bobo6.checked){
                obj["categoris"] = bobo6.value;
               
                
            }else{
                obj["categoris"] = bobo7.value;
                icon = "fas fa-wind"
              
            }
           
       today.push(obj)
      todayID.textContent=today.length
       
          
        important_fiel_div.innerHTML = ""
       /*casual_fiel_div.innerHTML = ""*/
       for(let  i = 0; i<today.length; i++){
           let icon ;
           if(today[i]["categoris"]=="work"){
               icon = "fas fa-user-cog"
              }else if(today[i]["categoris"]=="personal"){
                       icon = "fas fa-user-check" 
                       }else{
                           icon = "fas fa-wind"
                           
                       }
           
           if(today[i]["importance"]=="important"){
              important_fiel_div.append(addText(today[i]["text"],icon," "+ today[i]["categoris"]))
              }else{
                  casual_fiel_div.append(addText(today[i]["text"],icon," "+ today[i]["categoris"]))
              }
        
           }
   
   
    } 
   console.log(textarea1.value)
textarea1.value = ''
  
}

function date() {
  let d = new Date();
   let n2 = d.getFullYear();
     let n1 =  d.getMonth();
  let n = d.getDate();
    n1+=1


        
 return n2+ "-0"+ n1+"-" +n ;
    
}

