function callingFunction() {
  function akanNaming() {
    var bday;
    bday = document.getElementById("myDate").value;
    let gender = document.getElementById("gender").value
    var bdayArray = bday.split('-');
    //validation
    if (gender.length === 0) {
      alert("Select Gender")
    } 
    if(bdayArray.length !== 3){
         alert("invalid Date");
    }else{
        if(!bdayArray[0].match(/^\d\d\d\d$/) || 
           !bdayArray[1].match(/^\d\d$/) || 
           !bdayArray[2].match(/^\d\d$/)){
            alert("invalid Date");    
        }else{
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
            let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
            let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
            var currentTime = new Date(            
                parseInt(bdayArray[0]),
                parseInt(bdayArray[1]) - 1, //month starts from 0
                parseInt(bdayArray[2])
            );        
            var currentDay = currentTime.getDay();       
            var currentDayName= days[currentDay];
            let output = "You were born on "+currentDayName;
            return output;
        }
    }
    }
    document.getElementById("hidden").style.display = 'block';
    document.getElementById("output").innerHTML = akanNaming();
}
