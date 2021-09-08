let fName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let mName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

// function to get dateinput
function getInputdata() {
  let date1 = parseInt(document.getElementById("dateinput").value);
  let date1 = new Date();
  let month = date1.getMonth() +1;
  let year = date1.getFullYear();
  let day = date1.getDate();

  let MM = month;
  let YY = year;
  let DD = day;

  let CC = year.slice(0, 2);

  let gender = document.getElementById("gender").value;
  

}

// console log
console.log(mm);


  // validation 
if (dateinput = "") {
  alert("choose a date");
  } else {
  getInputdata();
}

if(gender === male) {
  document.getElementById("well").innerHTML=`your name is + ${}`

  } else if (gender === female) {
  document.getElementById("well").innerHTML= `your name is ${}`
  


let dayOfTheWeek =( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;



  
  
  


