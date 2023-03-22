let button = document.createElement('input');
let textInput = document.createElement('input');
textInput.placeholder = "Course Code ex: CSE"
let searchResultText = document.createElement("p")
let form = document.createElement("div")

textInput.type = "text"
textInput.classList.add("myinput")
button.type = 'button';
button.value = 'Submit';
button.classList.add("mybutton")
form.style.position = 'fixed';
form.style.top = '100px';
form.style.right = '100px';
form.style.zIndex = "1";
form.id ="target"
form.classList.add("mycontainer")
form.classList.add("mytarget")




let child = document.getElementsByClassName("card-body")[6]
let transcript = document.getElementById("transcript")
form.appendChild(textInput)
form.appendChild(button)
transcript.appendChild(form);

button.addEventListener('click', button_click);




const select = document.createElement('select');
select.classList.add("myinput")
select.setAttribute('id', 'dep');
select.setAttribute('name', 'dep');



const option0 = document.createElement('option');
option0.setAttribute('value', '');
option0.disabled = true
option0.selected = true
option0.appendChild(document.createTextNode('Select Dep'));

const option1 = document.createElement('option');
option1.setAttribute('value', 'cse');
option1.appendChild(document.createTextNode('CSE'));

const option2 = document.createElement('option');
option2.setAttribute('value', 'communication');
option2.appendChild(document.createTextNode('Communication'));

const option3 = document.createElement('option');
option3.setAttribute('value', 'power');
option3.appendChild(document.createTextNode('Power'));

select.appendChild(option0);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

form.appendChild(select);

let info = document.createElement("div")
info.style.marginTop = "10px";

form.appendChild(info)




select.addEventListener("change",(e)=>{

  let creditHours = {};
  let tables = document.querySelectorAll('div.mb-4 table.table.table-striped.text-nowrap');
  for (let i = 0; i < tables.length; i++) {
    let table = tables[i];
  
    // Loop through each row in the table (skip the header and footer rows)
    for (let j = 1; j < table.rows.length - 2; j++) {
      let row = table.rows[j];
  
      // Extract the course code and credit hour values
      let code = row.cells[0].textContent;
      let creditHour = parseInt(row.cells[2].textContent);
  
      // Add the code and credit hour to the dictionary
      creditHours[code] = creditHour;
    }
  }




  if(e.target.value === "cse"){
    textInput.value = ""
    allcourcescredithour = courseSummation("",creditHours)
    couresStartsWithCSE = courseSummation("CSE",creditHours)
    let p1 = document.createElement("p")
    p1.innerText = "your total credit hour is " + allcourcescredithour + "/170"
    let p2 = document.createElement("p")
    p2.innerText = "your total MAJOR-COURSE credit hour is " + couresStartsWithCSE + "/102"
    const infoDep = document.createElement("div")
    infoDep.appendChild(p1)
    infoDep.appendChild(p2)
    info.innerHTML =  infoDep.outerHTML
  }
  else if(e.target.value === "power"){
    let p1 = document.createElement("p")
    p1.innerText = "sorry!! service is not available for power students yet. but Soon!"
    const infoDep = document.createElement("div")
    infoDep.appendChild(p1)
    info.innerHTML =  infoDep.outerHTML
  }
  else if(e.target.value === "communication"){
    let p1 = document.createElement("p")
    p1.innerText = "sorry!! service is not available for communication students yet. but Soon!"
    const infoDep = document.createElement("div")
    infoDep.appendChild(p1)
    info.innerHTML =  infoDep.outerHTML
  }

})
// select.onchange = 
function button_click(){
  let creditHours = {};
  let tables = document.querySelectorAll('div.mb-4 table.table.table-striped.text-nowrap');
  for (let i = 0; i < tables.length; i++) {
    let table = tables[i];
  
    // Loop through each row in the table (skip the header and footer rows)
    for (let j = 1; j < table.rows.length - 2; j++) {
      let row = table.rows[j];
  
      // Extract the course code and credit hour values
      let code = row.cells[0].textContent;
      let creditHour = parseInt(row.cells[2].textContent);
  
      // Add the code and credit hour to the dictionary
      creditHours[code] = creditHour;
    }
  }



  const inputCourseCode = textInput.value.toUpperCase()
  searchResultText.innerText = "Total credit hour starting with " + inputCourseCode + " is: " + courseSummation(inputCourseCode,creditHours)
  // form.appendChild(searchResultText)
  info.innerHTML =  searchResultText.outerHTML
}


function courseSummation(courseCode="",creditHours){
  let sum = 0;
  for (const course in creditHours) {
    if (course.startsWith(courseCode)) {
      sum += creditHours[course];
    }
  }
  return sum
}


const sheet = new CSSStyleSheet();
// sheet.replaceSync('.mytarget {background-color: red;}');



// sheet.replaceSync('.mytarget  {display: flex; background-color: red;}');
sheet.insertRule(".mycontainer {border-radius: 5px;  background-color: #e7e7e7; padding: 5px; box-shadow: 10px 10px 8px #888888; }")
sheet.insertRule(".mybutton { background-color: #008CBA;  border: none; color: white;  padding: 15px 32px; text-align: center;   text-decoration: none; display: inline-block;   font-size: 16px; margin-right: 10px;} ")
sheet.insertRule(".myinput  {padding: 12px 20px; margin: 8px 0;  box-sizing: border-box;}")
// sheet.insertRule('.mytarget  {display: flex; justify-content: center; align-items: center; flex-direction: column;}');
// Apply the stylesheet to a document:
document.adoptedStyleSheets = [sheet];




