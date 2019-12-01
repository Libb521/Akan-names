var century, year, month, dayOfMonth, dayOfWeek, day;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];


//Get Input
var day =function getinput(){
  century = parseInt(document.getElementById("century").value)
  year = parseInt(document.getElementById("year").value)
  month = parseInt(document.getElementById("month").value)
  dayOfMonth = parseInt(document.getElementById("monthday").value)

  if(century==""){
    alert("input the correct century");
    return false;
  }else if (year==""){
  alert("Input the correct year");
  return false;
  }else if (month==""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth==""){
  alert("Input correct date")
}
}
function calculate(){
  day();//call the function (day)
  dayOfWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
  return (Math.floor(dayOfWeek));
  console.log(dayOfWeek);
  //This is to calculate and find the day of the week. Output should range from 0-6
}

