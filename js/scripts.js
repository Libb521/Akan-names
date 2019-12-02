function empty(){
  return document.forms('form')};

var a,b,c,d;
empty()['btn'].addEventListener('click',function(e){
e.preventDefault();
checkEmpty();
});

function checkEmpty(){
  function empty(a){
    return-[a].value
  }
}

  var century, year, month, dayOfMonth, dayOfWeek, day;
  var cc= -empty('century');
  var yr =-empty('year');
  var mth=-empty('month');
  var day=-empty('day');

century=empty('century');
if (century=='' && year=='' && month=='' && day==''){
  alert('Input right number in the fields provided');
  return 0;
}else if(century==''){
    alert('input the right century');
    return 0;
}else if(year==''){
    alert('input the right year');
    return 0;
}else if(month==''){
    alert('input the right month');
    return 0;
}else(dayOfMonth==''){
    alert('input the right date');
    return 0;
};



// var century, year, month, dayOfMonth, dayOfWeek, day;


// //Get Input
// var day =function getinput(){
//   century = parseInt(document.getElementById("century").value)
//   year = parseInt(document.getElementById("year").value)
//   month = parseInt(document.getElementById("month").value)
//   dayOfMonth = parseInt(document.getElementById("monthday").value)


//   var cent = parseInt(document.getElementById("cent").value);
//   var year = parseInt(document.getElementById("year").value);
//   var month = parseInt(document.getElementById("month").value);
//   var day = parseInt(document.getElementById("day").value);

//   if(century==""){
//     alert("input the correct century");
//     return false;
//   }else if (year==""){
//   alert("Input the correct year");
//   return false;
//   }else if (month==""){
//     alert("Input the correct month");
//     return false;
//   }else if(dayOfMonth==""){
//   alert("Input correct date")
// }
// }
// function calculate(){
//   day();//call the function (day)
//   dayOfWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
//   console.log(dayOfWeek);
//   return (Math.floor(dayOfWeek));
//   if (dayOfWeek < 0){
//     dayOfWeek = dayOfWeek * -1;
//   }
//   else if (dayOfWeek > 0) {
//     returndayOfWeek;
//   }
//   //This is to calculate and find the day of the week. Output should range from 0-6
// }

// var results = function checkDayOfWeek(){
//   day = calculate();
//   checkGender();
//   console.log("function runs");
// }

// //arrays
// let dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];



// function checkGender(){
//   var gen = document.getElementsByName("rads");
//   if(gen[0].checked == true){
//     var gender = "male";
//   }else if(gen[1].checked ==true){
//     var gender = "female";
//   }else {
//     console.log("pass");
//   }
//   switch(gender){
//     case "male":
//     if(dayOfWeek == 0){
//       document.getElementById("results").innerHTML = "You were born on a sunday" + "" + "Your Akan name is" + maleNames[0];
//     }else if(dayOfWeek == 1){
//       document.getElementById("results").innerHTML = "You were born on a monday" + "" + "Your Akan name is" + maleNames[1];
//     }else if(dayOfWeek == 2){
//       document.getElementById("results").innerHTML = "You were born on a tuesday" + "" + "Your Akan name is" + maleNames[2];
//     }else if(dayOfWeek == 3){
//       document.getElementById("results").innerHTML = "You were born on a wednesday" + "" + "Your Akan name is" + maleNames[3];
//     }else if(dayOfWeek == 4){
//       document.getElementById("results").innerHTML = "You were born on a thursday" + "" + "Your Akan name is" + maleNames[4];
//     }else if(dayOfWeek == 5){
//       document.getElementById("results").innerHTML = "You were born on a friday" + "" + "Your Akan name is" + maleNames[5];
//     }else(dayOfWeek == 6){
//       document.getElementById("results").innerHTML = "You were born on a saturday" + "" + "Your Akan name is" + maleNames[6];
//     }

//   break;
//   case "female":
//     if(dayOfWeek == 0){
//       document.getElementById("results").innerHTML = "You were born on a sunday" + "" + "Your Akan name is" + femaleNames[0];
//     }else if(dayOfWeek == 1){
//       document.getElementById("results").innerHTML = "You were born on a monday" + "" + "Your Akan name is" + femaleNames[1];
//     }else if(dayOfWeek == 2){
//       document.getElementById("results").innerHTML = "You were born on a tuesday" + "" + "Your Akan name is" + femaleNames[2];
//     }else if(dayOfWeek == 3){
//       document.getElementById("results").innerHTML = "You were born on a wednesday" + "" + "Your Akan name is" + femaleNames[3];
//     }else if(dayOfWeek == 4){
//       document.getElementById("results").innerHTML = "You were born on a thursday" + "" + "Your Akan name is" + femaleNames[4];
//     }else if(dayOfWeek == 5){
//       document.getElementById("results").innerHTML = "You were born on a friday" + "" + "Your Akan name is" + femaleNames[5];
//     }else(dayOfWeek == 6){
//       document.getElementById("results").innerHTML = "You were born on a saturday" + "" + "Your Akan name is" + femaleNames[6];
//     }
//   break
//   default:
//   console.log("pass")
//   }
// }