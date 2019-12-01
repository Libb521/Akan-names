var century, year, month, dayOfMonth, dayOfWeek, day;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];


//Get Input
function getinput(){
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

