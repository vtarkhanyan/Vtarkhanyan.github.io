let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let div_left_li = document.querySelectorAll(".div_left_li");


function data(name) {
    let a = new Date()
    let day = a.getDate()
    let week = a.getDay()
    let month = a.getMonth()
    let name_data = document.getElementById("name_data")
    name_data.innerHTML = ` ${name}, ${weekDay[week]}, ${monthName[month]} ${day}`

}

data("Today")


for (let i = 0; i < div_left_li.length; i++) {
    div_left_li[i].addEventListener("click", getDetaInfo)
}

function getDetaInfo() {
    data(this.innerText)
}

let fa_edit = ""
let div_mid = ""
let fa_trash_alt = ""
let count = 0
let id = 0

const input = document.getElementById("input");
const important_fiel_div = document.getElementById("important_fiel_div");

const important_legend = document.getElementById("important_legend");
const usual_legend = document.getElementById("usual_legend")
const usual_fiel_div = document.getElementById("usual_fiel_div");

let today = []
let allID = document.getElementById("allID")
let todayID = document.getElementById("todayID")
let nextdaysID = document.getElementById("nextdaysID")
let weekendID = document.getElementById("weekendID")
let importantID = document.getElementById("importantID");
let usualID = document.getElementById("usualID");
let trashID = document.getElementById("trashID");
let doneID = document.getElementById("doneID");
let missedID = document.getElementById("missedID");
let workID = document.getElementById("workID");
let personalID = document.getElementById("personalID");
let otherID = document.getElementById("otherID");



function addText(value, icon, icontext, count) {

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
    let attID = document.createAttribute("id")
    let attEdit = document.createAttribute("edit")
    let attTrash = document.createAttribute("trash")
    let div_mid_id = document.createAttribute("div_mid_id")

    att.value = "top_fieldset_div"
    div.setAttributeNode(att)
    att1.value = "div_left"
    div1.setAttributeNode(att1)
    div.appendChild(div1)
    att2.value = "div_mid"
    div_mid_id.value = count
    div2.setAttributeNode(att2)
    div2.setAttributeNode(div_mid_id)
    div2.contentEditable = false;
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
    attID.value = count
    attEdit.value = count
    I.setAttributeNode(attID)
    I.addEventListener("click", check)
    div1.appendChild(I)
    div2.innerText = value
    I3.setAttributeNode(att10)

    div3.appendChild(I3)
    I3.textContent = icontext

    I1.setAttributeNode(attEdit)
    att5.value = "far fa-edit"
    I1.setAttributeNode(att5)
    I1.addEventListener("click", edit)
    div3.appendChild(I1)
    att6.value = "far fa-trash-alt trash"
    attTrash.value = count;
    I2.setAttributeNode(att6);
    I2.setAttributeNode(attTrash);
    I2.addEventListener("click", trash)
    div3.appendChild(I2)


    function check(event) {
        if (I.getAttribute("class") === "far fa-circle") {
            att4.value = "fas fa-check"
            div2.classList.toggle("overline");
            div.classList.add("bg_color")
            today[event.target.id]["done"] = true
            doneID.textContent++
            console.log(event.target.id)

        } else {
            att4.value = "far fa-circle"
            div2.classList.toggle("overline");
            div.classList.toggle("bg_color")
            today[event.target.id]["done"] = false
            doneID.textContent--
            console.log(event.target.id)
        }

    }

    function trash(event) {
         confirm("Are you sure to remove the task?")
        console.log(event.target.getAttribute("trash"))

        console.log(event.path[2])
        trashID.textContent++
        today[event.target.getAttribute("trash")]["trash"] = true
        event.path[2].remove()



    }

    function edit(event) {

        console.log(div2)

        if (today[event.target.attributes.edit.nodeValue]["edit"]) {
            event.target.style.color = "black";
            event.target.style.fontSize = "16px"
            today[event.target.attributes.edit.nodeValue]["edit"] = false
            div2.contentEditable = false
            div2.style.height = "auto"
            div2.style.backgroundColor = "inherit";
            div2.style.color = "black";
            today[event.target.attributes.edit.nodeValue]["text"] = div2.textContent

        } else {
            event.target.style.color = "red";
            event.target.style.fontSize = "19px"
            today[event.target.attributes.edit.nodeValue]["edit"] = true
            div2.contentEditable = true
            div2.style.minHeight = "30px"
            div2.style.backgroundColor = "RGBA(63,94,251,0.7)"
            div2.style.color = "white";
        }

        /*if (div_mid[event.target.getAttribute("edit")].contentEditable == "false") {
            div_mid[event.target.getAttribute("edit")].contentEditable = "true"
            event.target.style.color = "red";
            event.target.style.fontSize = "19px"
            div_mid[event.target.getAttribute("edit")].style.height = "30px"
            div_mid[event.target.getAttribute("edit")].style.backgroundColor = "cornsilk"
            div_mid[event.target.getAttribute("edit")].style.color = "red";

        } else {
            div_mid[event.target.getAttribute("edit")].contentEditable = "false"
            event.target.style.color = "black";
            event.target.style.fontSize = "16px"
            div_mid[event.target.getAttribute("edit")].style.height = "auto"
            div_mid[event.target.getAttribute("edit")].style.backgroundColor = "burlywood"
            div_mid[event.target.getAttribute("edit")].style.color = "black";
            today[event.target.getAttribute("edit")]["text"] = div_mid[event.target.getAttribute("edit")].textContent
        }*/


    }
    count++
    //editTrash()
    return div

}


let textarea1 = ""

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
    att6.value = "usual"
    att15.value = "importance"
    att7.value = "usual"

    input1.setAttributeNode(att14);
    input1.setAttributeNode(att6);
    input1.setAttributeNode(att15);
    input1.setAttributeNode(att7);
    input1.setAttributeNode(att28);
    label.appendChild(input1);
    let br2 = document.createElement("br");
    div.appendChild(br2)
    let label5 = document.createElement("label");
    label5.textContent = " Category: ";
    div.appendChild(label5)
    
    
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
     let label4 = document.createElement("label");
    label4.textContent = " Work ";
    label5.appendChild(label4)
    
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
    label5.appendChild(input4);
let label6 = document.createElement("label");
    label6.textContent = " Personal ";
    label5.appendChild(label6)
    
    
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
    label5.appendChild(input5);
let label7 = document.createElement("label");
    label7.textContent = " Other ";
    label5.appendChild(label7)



    let label2 = document.createElement("label");
    label2.textContent = " Usual ";
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
    span.textContent = " Task description: ";
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
    let br3 = document.createElement("br");
    div.appendChild(br3)
    let btn = document.createElement("button")
    let attBtnID = document.createAttribute("id");
    let attonclick = document.createAttribute("onclick");
    attBtnID.value = "btn"
    attonclick.value = "bobo()"
    btn.setAttributeNode(attBtnID);
     btn.setAttributeNode(attonclick);
    btn.textContent = "Add tasks";
   
    div.appendChild(btn)
     btn.addEventListener("click", bobo);
    return div
    // <button id="btn1"><i class="fas fa-plus"></i>Add tasks</button>
}


/*function editTrash(){
    
            fa_edit=Array.from(document.querySelectorAll(".fa-edit"))
        fa_edit.sort((a,b)=> a.attributes.edit.nodeValue-b.attributes.edit.nodeValue)
         div_mid=Array.from(document.querySelectorAll(".div_mid"))
        div_mid.sort((a,b)=> a.attributes.div_mid_id.nodeValue-b.attributes.div_mid_id.nodeValue)
    
    /*    fa_trash_alt =document.querySelectorAll(".trash")
        for (let i = 0; i < div_mid.length; i++) {
            div_mid[i].contentEditable = "false"
         
        }
 
        for (let i = 0; i < fa_edit.length; i++) {
            fa_edit[i].addEventListener("click", edit)
        }
       /* for (let i = 0; i < fa_trash_alt.length; i++) {
            fa_trash_alt[i].addEventListener("click", trash)
        }*/

/*   function edit(event) {

            console.log(event.target.getAttribute("edit"))
             console.log(event.target)

            if (div_mid[event.target.getAttribute("edit")].contentEditable == "false") {
                div_mid[event.target.getAttribute("edit")].contentEditable = "true"
                event.target.style.color = "red";
                event.target.style.fontSize = "19px"
                div_mid[event.target.getAttribute("edit")].style.height = "30px"
                div_mid[event.target.getAttribute("edit")].style.backgroundColor = "cornsilk"
                div_mid[event.target.getAttribute("edit")].style.color = "red";

            } else {
                div_mid[event.target.getAttribute("edit")].contentEditable = "false"
                event.target.style.color = "black";
                event.target.style.fontSize = "16px"
                div_mid[event.target.getAttribute("edit")].style.height = "auto"
                div_mid[event.target.getAttribute("edit")].style.backgroundColor = "burlywood"
                div_mid[event.target.getAttribute("edit")].style.color = "black";
                today[event.target.getAttribute("edit")]["text"] = div_mid[event.target.getAttribute("edit")].textContent
            }


        }
          /*     function trash(event) {

            console.log(event.target.getAttribute("trash"))
               
        console.log(event.path[2])
            trashID.textContent++
               today[event.target.getAttribute("trash")]["trash"] = true    
                 event.path[2].remove()
     


        }
}*/


let section_div_right = document.getElementById("section_div_right")

btn1.addEventListener("click", bobo1)

function bobo1() {
    important_legend.textContent = "ADD NEW TASKS"
    usual_legend.textContent = ""
    important_fiel_div.innerHTML = addTask().outerHTML
    usual_fiel_div.innerHTML = ""
    addTask()

}







let bobo2 = " ";

let con

function bobo() {
    
    important_legend.textContent = "Important"
    usual_legend.textContent = "Usual"
    bobo2 = document.getElementById("dueto")
    if(time(bobo2.value)<date()){
       
    }else{
          con = confirm("Are you sure to create an expired task?");
        console.log(confirm)
    }
    let bobo3 = document.getElementById("important");
    let bobo4 = document.getElementById("usual");
    let bobo5 = document.getElementById("work");
    let bobo6 = document.getElementById("personal");
    let bobo7 = document.getElementById("other");
    let obj = {}
    obj["done"] = false;
    obj["trash"] = false;
    obj["edit"] = false;
    obj["id"] = id;
    if (textarea1.value && bobo2.value !== "") {



        obj["text"] = textarea1.value;
        if (bobo3.checked) {
            obj["importance"] = bobo3.value;

        } else {
            obj["importance"] = bobo4.value;
        }

        obj["date"] = bobo2.value;
        if (bobo5.checked) {
            obj["categoris"] = bobo5.value;


        } else if (bobo6.checked) {
            obj["categoris"] = bobo6.value;


        } else {
            obj["categoris"] = bobo7.value;
            icon = "fas fa-wind"

        }

        today.push(obj)
        id++
        allID.textContent = today.length
        todayID.textContent = today.filter(function (x) {
            return x.date == date() && x.done == false && x.trash == false
        }).length
        nextdaysID.textContent = today.filter(function (x) {
            return x.date != date() && x.done == false && x.trash == false && time(x.date) > time(date())
        }).length
        weekendID.textContent = today.filter(function (x) {
            return (weekend(x.date) == 0 || weekend(x.date) == 6)  && x.done == false && x.trash == false
        }).length
        importantID.textContent = today.filter(function (x) {
            return x.importance == "important"  && x.done == false && x.trash == false
        }).length
        usualID.textContent = today.filter(function (x) {
            return x.importance == "usual" && x.done == false && x.trash == false
        }).length

        missedID.textContent = today.filter(function (x) {
            return day(x.date) < day1()  && x.done == false && x.trash == false
        }).length
        workID.textContent = today.filter(function (x) {
            return x.categoris == "work"  && x.done == false && x.trash == false
        }).length
        personalID.textContent = today.filter(function (x) {
            return x.categoris == "personal"  && x.done == false && x.trash == false
        }).length
        otherID.textContent = today.filter(function (x) {
            return x.categoris == "other"  && x.done == false && x.trash == false
        }).length


        important_fiel_div.innerHTML = " "
        /*usual_fiel_div.innerHTML = ""*/
        for (let i = 0; i < today.length; i++) {
            let icon;
            if (today[i]["categoris"] == "work") {
                icon = "fas fa-user-cog"
            } else if (today[i]["categoris"] == "personal") {
                icon = "fas fa-user-check"
            } else {
                icon = "fas fa-wind"

            }
            if (today[i]["done"] == false && today[i]["trash"] == false) {
                if (today[i]["importance"] == "important") {
                 
                    important_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                } else {
             
                    usual_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                }
            }
        }



    }

    textarea1.value = ''

}





for (let i = 0; i < div_left_li.length; i++) {
    div_left_li[i].addEventListener("click", chenge)
}

function chenge(event) {

    let str = event.target.innerText
    

    function filter(bool) {
        for (let i = 0; i < today.length; i++) {
            let icon;
          
            if (today[i]["categoris"] == "work") {
                icon = "fas fa-user-cog"
            } else if (today[i]["categoris"] == "personal") {
                icon = "fas fa-user-check"
            } else {
                icon = "fas fa-wind"

            }


            if (bool(i) && today[i]["done"] == false && today[i]["trash"] == false) {

                if (today[i]["importance"] == "important") {
              
                    important_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                } else {
                    usual_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                }
            }
        }


    }
    function filterALL(bool) {
        for (let i = 0; i < today.length; i++) {
            let icon;
          
            if (today[i]["categoris"] == "work") {
                icon = "fas fa-user-cog"
            } else if (today[i]["categoris"] == "personal") {
                icon = "fas fa-user-check"
            } else {
                icon = "fas fa-wind"

            }


            if (bool(i)) {

                if (today[i]["importance"] == "important") {
              
                    important_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                } else {
                    usual_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                }
            }
        }


    }
        function filterTrash(bool) {
        for (let i = 0; i < today.length; i++) {
            let icon;
          
            if (today[i]["categoris"] == "work") {
                icon = "fas fa-user-cog"
            } else if (today[i]["categoris"] == "personal") {
                icon = "fas fa-user-check"
            } else {
                icon = "fas fa-wind"

            }


            if (bool(i)) {

                if (today[i]["importance"] == "important") {
              
                    important_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                } else {
                    usual_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                }
            }
        }


    }       
    
    function filterDone(bool) {
        for (let i = 0; i < today.length; i++) {
            let icon;
          
            if (today[i]["categoris"] == "work") {
                icon = "fas fa-user-cog"
            } else if (today[i]["categoris"] == "personal") {
                icon = "fas fa-user-check"
            } else {
                icon = "fas fa-wind"

            }


            if (bool(i)) {

                if (today[i]["importance"] == "important") {
              
                    important_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                } else {
                    usual_fiel_div.append(addText(today[i]["text"], icon, " " + today[i]["categoris"], today[i]["id"]))
                }
            }
        }


    }

    if (str.startsWith("All")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filterALL(function bool(i) {

            return today[i]
        })


    }
    if (str.startsWith("Today")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return today[i]["date"] == date()
        })


    }
    if (str.startsWith("Next")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return time(today[i]["date"]) > time(date())
        })
    }
    if (str.startsWith("Weekend")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return weekend(today[i]["date"]) == 0 || weekend(today[i]["date"]) == 6
        })
    }
    if (str.startsWith("Important")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return today[i]["importance"] == "important"
        })
    }
    if (str.startsWith("Usual")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return today[i]["importance"] == "usual"
        })
    }
    if (str.startsWith("Missed")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return time(today[i]["date"]) < time(date())
        })
    }
    if(str.startsWith("Trash")){
       important_fiel_div.innerHTML = ""
        usual_fiel_div.innerHTML = ""
        filterTrash(function bool(i){
       console.log(today[i]["trash"])
       return today[i]["trash"] == true
       })  
       }
    if(str.startsWith("Done")){
       important_fiel_div.innerHTML = ""
        usual_fiel_div.innerHTML = ""
       filterDone(  function bool(i){
       
       return today[i]["done"]==true
       })  
       }
    if (str.startsWith("Work")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return today[i]["categoris"] == "work"
        })
    }
    if (str.startsWith("Personal")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return today[i]["categoris"] == "personal"
        })
    }
    if (str.startsWith("Other")) {
        important_fiel_div.innerHTML = " "
        usual_fiel_div.innerHTML = " "
        filter(function bool(i) {

            return today[i]["categoris"] == "other"
        })
    }
}


function date() {
    let d = new Date();
    let n2 = d.getFullYear();
    let n1 = d.getMonth();
    let n = d.getDate();
    n1 += 1



    return n2 + "-0" + n1 + "-" + n;

}

function weekend(x) {
    let d = new Date(x);
    let n = d.getDay()
    return n
}

function day(x) {
    let d = new Date(x);
    let n = d.getDate()
    return n
}

function day1() {
    let d = new Date();
    let n = d.getDate()
    return n
}

function time(x) {
    let d = new Date(x);
    let n = d.getTime();
    return n
}
