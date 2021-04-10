function callingFunction() {
  function akanNaming() {
    var bday;
    bday = document.getElementById("myDate").value;
    let gender = document.getElementById("gender").value
    var bdayArray = bday.split('-');
    //validation
    if(bdayArray.length !== 3){
      alert("invalid Date");
    }
    else {
      if(!bdayArray[0].match(/^\d\d\d\d$/) || 
        !bdayArray[1].match(/^\d\d$/) || 
        !bdayArray[2].match(/^\d\d$/)){
        alert("invalid Date");    
      }else {
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
        switch(gender){
          case "Male":
            if (currentDayName == days[0]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + maleNames[0];
              return output;
            }
            else if(currentDayName == days[1]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + maleNames[1];
              return output;
            }
            else if(currentDayName == days[2]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + maleNames[2];
              return output;
            }
            else if(currentDayName == days[3]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + maleNames[3];
              return output;
            }
            else if(currentDayName == days[4]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + maleNames[4];
              return output;
            }
            else if(currentDayName == days[5]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + maleNames[5];
              return output;
            }
            else if(currentDayName == days[6]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + maleNames[6];
              return output;
            }
          break;
          case "Female":
            if (currentDayName == days[0]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + femaleNames[0];
              return output;
            }
            else if(currentDayName == days[1]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + femaleNames[1];
              return output;
            }
            else if(currentDayName == days[2]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + femaleNames[2];
              return output;
            }
            else if(currentDayName == days[3]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + femaleNames[3];
              return output;
            }
            else if(currentDayName == days[4]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + femaleNames[4];
              return output;
            }
            else if(currentDayName == days[5]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + femaleNames[5];
              return output;
            }
            else if(currentDayName == days[6]){
              let output = "You were born on "+currentDayName + ". Your Akan name is " + femaleNames[6];
              return output;
            }
          break;
          default:
            let output = "It seems we encountered a bug in our system program! Sorry for our inconviniences.";
            return output;
        }
      }    
    }
  }
  document.getElementById("hidden").style.display = 'block';
  document.getElementById("output").innerHTML = akanNaming();
}
