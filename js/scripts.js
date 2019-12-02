function empty(){
  return document.forms['form'];
}

var a,b,c;
empty()['btn'].addEventListener('click',function(e){
e.preventDefault();
checkEmpty();
});

function checkEmpty(){
  function check(a){
    return empty()[a].value
  }

  var year, month, dayOfMonth,gender;
  yr =check('year');
  mth=check('month');
  dayOfMonth=check('dayOfMonth');
  gender= check('gender')
  if (year=='' && month=='' && dayOfMonth=='' && gender==''){
  alert('Input right number in the fields provided to calculate your Akan name');
  return 0;
  }else if(year==''){
    alert('input the right year 2000');
    return 0;
  }else if(month==''){
    alert('input the right month e.g 12');
    return 0;
  }else if(dayOfMonth==''){
    alert('input the right date e.g 30');
    return 0;
  }else{
    calculate(year, month, dayOfMonth, gender);
  }
}


function calculate(year, month, dayOfMonth,gender){
  year = perseInt(year);
  month = perseInt(month);
  dayOfMonth = perseInt(dayOfMonth);
  var century=(y-1)/100+1;
  var formula=parseInt(((26*(month+1)/10)) +((5*year/4)) +((century/4) -2* century - 1) +dayOfMonth)%7;
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];
  var dayOfMonth = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

if (month<1 || month>12){
  alert('invalid month');
  return 0;
}else if(dayOfMonth<1 || dayOfMonth>31){
  alert('invalid date')
  return 0;
}else if(year<1 || year>2020){
  alert('invalid year')
}

if(gender=='male'){
  gender = male;
}else if(gender=='female'){
  gender=female;
}else{
  alert('invalid gender');
  return 0;
}

for(var a=0; a<7;a++){
  if(Math.ceil(formula)==(a)){
    document.getElementById("result").innerHTML=('You were born on a:' +day[a]+ 'your Akan name is '+ g[a]);
    return 0;
  }
}
}
