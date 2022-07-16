var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

let Mytitle = document.getElementById("titl");
Mytitle.innerHTML = `Attendance For Student ${date}`;

const myNewRow = [];

let table = document.querySelector('table');

function Add(myrow) {


  let mynumber = document.getElementById("number");
  let addnumber = mynumber.value;


  let myFname = document.getElementById("fname");
  let addFname = myFname.value;


  let myLname = document.getElementById("lname");
  let addLnmae = myLname.value;

  if (addnumber.length && addFname.length && addLnmae.length) {


    let myinfo = {
      num: addnumber,
      first: addFname,
      last: addLnmae
    };


    myNewRow.push(myinfo);
    mynumber.value = "";
    myFname.value = "";
    myLname.value = "";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("biger").style.display = "none";
    Myrender();

  }
  else
    alert('you must fill all this feild !')

}




var row_id = 0;
var B1id=1;
var B2id=B1id+10;
var B3id=B2id+10;



function Myrender() {
  const newRow = document.getElementById("myrow");
  let numCount = 1;
  table.innerHTML =
    `<tr >
<th>Number</th>
<th>Student ID</th>
<th>Student Name</th>
<th>Attendance</th>
</tr>

<tr id="r33">
<td>${numCount++}</td>
<td>12345</td>
<td>JOHAN DONE</td>

<td>
    <div class="buttons">
        <button id="bt211" onclick="changeMe1('33','bt211','bt222','bt233')">&#9989;</button>
        <button id="bt222" onclick="changeMe2('33','bt211','bt222','bt233')">&#128683;</button>
        <button id="bt233" onclick="changeMe3('33','bt211','bt222','bt233')">&#128337;</button>
    </div>
</td>
</tr>
`;

  myNewRow.forEach((element, i) => {
    console.log(numCount);
row_id+=1;
B1id++;
B2id++;
B3id++;

let BTN1=B1id.toString();
let BTN2=B2id.toString();
let BTN3=B3id.toString();

let mID=row_id.toString();


let btn1 = document.getElementById(mID);
let btn2 = document.getElementById(mID);
let btn3 = document.getElementById(mID);



    const newItem = `

<tr id=r${mID} >
<td>${numCount++}</td>
<td>${element.num}</td>
<td>${(element.first + ' ' + element.last)}</td>
<td>
    <div class="buttons">
        <button  id="${BTN1}"  onclick= "changeMe1(${mID},${BTN1},${BTN2},${BTN3})" >&#9989;  </button>
        <button  id="${BTN2}"  onclick= "changeMe2(${mID},${BTN1},${BTN2},${BTN3})" >&#128683;</button>
        <button  id="${BTN3}"  onclick= "changeMe3(${mID},${BTN1},${BTN2},${BTN3})" >&#128337;</button>
    </div>
</td>

</tr>

`
    table.innerHTML += newItem;
     counter1 = 0;
     counter2 = 0;
     counter3 = 0;
    console.log(newItem);
    console.log("استغفر الله العظيم زهقت")
  });

  table.innerHTML = table.innerHTML + `<tr>
<td id="Statistics" colspan="3">Statistics</td>
    <td>
        <div class="summation">
        <span id="count-1">${counter1}</span>
        <span id="count-2">${counter2}</span>
        <span id="count-3">${counter3}</span>
    </div>
    </td>
</tr>`


}


let counter1 = 0;
let counter2 = 0;
let counter3 = 0;




function changeMe1(index,btn1,btn2,btn3) {
  console.log("r"+index);
  


  document.getElementById("r"+index).style.backgroundColor = '#edf8ed';
  console.log("hi");
  counter1++;

  document.getElementById("count-1").innerText = counter1;
  const element = document.getElementById(btn2);	
  element.style.visibility = "hidden";		

  const element2 = document.getElementById(btn3);	
  element2.style.visibility = "hidden";		
  
  document.getElementById(btn1).disabled = true;


}




function changeMe2(index,btn1,btn2,btn3) {
  document.getElementById("r"+index).style.backgroundColor = '#F9EFEE';
  counter2++;
  document.getElementById("count-2").innerText = counter2;

  const element = document.getElementById(btn1);	
  element.style.visibility = "hidden";		
  const element2 = document.getElementById(btn3);	
  element2.style.visibility = "hidden";		
  document.getElementById(btn2).disabled = true;



}

function changeMe3(index,btn1,btn2,btn3) {
  document.getElementById("r"+index).style.backgroundColor = '#ffffe6';
  counter3++;
  document.getElementById("count-3").innerText = counter3;

  const element = document.getElementById(btn1);	
  element.style.visibility = "hidden";		
  const element2 = document.getElementById(btn2);	
  element2.style.visibility = "hidden";		
  document.getElementById(btn3).disabled = true;

}


function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("biger").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("biger").style.display = "none";
}

function prevent(e) {

  event.preventDefault();
  console.log('not refresherd!!!!!!!!!!!!!!!!!!!');
}


function ExecelFile(mytable){
    
    var htmltable= document.getElementById('table');
    var html = htmltable.outerHTML
    window.open('data: application/vnd.ms-excel, ' + encodeURIComponent(html));
    

}



  function cls() {
    location.reload();

}
