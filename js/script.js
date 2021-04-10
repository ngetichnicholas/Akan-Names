function akanFunction() {
  let birthDate = document.getElementById("myDate").value;
let gender = document.getElementById("gender").value;
var birthDateArray = birthDate.split('-');
//validation
if(birthDateArray.length !== 3){
     alert("invalid Date");
}else{
    if(!birthDateArray[0].match(/^\d\d\d\d$/) || 
       !birthDateArray[1].match(/^\d\d$/) || 
       !birthDateArray[2].match(/^\d\d$/)){
        alert("invalid Date");    
    }else{
        let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
        let maleNames =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
        let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
        var currentTime = new Date(            
            parseInt(bdayArray[0]),
            parseInt(bdayArray[1]) - 1, //month starts from 0
            parseInt(bdayArray[2])
        );        
        var currentDay = currentTime.getDay();       
        var currentDayName= days[currentDay];
       document.write("You were born on "+currentDayName);
    }
}
}