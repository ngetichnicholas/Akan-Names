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
              let output = "You were born on " + "<span>" +currentDayName + "</span>" + ". Your Akan name is " + "<span>" + maleNames[0] + "</span>";
              return output;
            }
            else if(currentDayName == days[1]){
              let output = "You were born on " + "<span>" +currentDayName + "</span>" + ". Your Akan name is " + "<span>" + maleNames[1] + "</span>";
              return output;
            }
            else if(currentDayName == days[2]){
              let output = "You were born on " + "<span>"+ currentDayName + "</span>" + ". Your Akan name is " + "<span>" + maleNames[2] + "</span>";
              return output;
            }
            else if(currentDayName == days[3]){
              let output = "You were born on " + "<span>" +currentDayName + "</span>" + ". Your Akan name is " + "<span>" + maleNames[3] + "</span>";
              return output;
            }
            else if(currentDayName == days[4]){
              let output = "You were born on "+ "<span>"+currentDayName + "</span>" + ". Your Akan name is " + "<span>" + maleNames[4] + "</span>";
              return output;
            }
            else if(currentDayName == days[5]){
              let output = "You were born on "+ "<span>" +currentDayName + "</span>" + ". Your Akan name is " + "<span>" + maleNames[5] + "</span>";
              return output;
            }
            else if(currentDayName == days[6]){
              let output = "You were born on " + "<span>" +currentDayName + "</span>" + ". Your Akan name is "+ "<span>" + maleNames[6] + "</span>";
              return output;
            }
          break;
          case "Female":
            if (currentDayName == days[0]){
              let output = "You were born on " + "<span>"+ currentDayName + "</span>" + ". Your Akan name is " + "<span>"+ femaleNames[0] + "</span>";
              return output;
            }
            else if(currentDayName == days[1]){
              let output = "You were born on " + "<span>"+ currentDayName + "</span>" + ". Your Akan name is " + "<span>"+ femaleNames[1] + "</span>";
              return output;
            }
            else if(currentDayName == days[2]){
              let output = "You were born on " + "<span>"+currentDayName + "</span>" + ". Your Akan name is " + "<span>"+ femaleNames[2] + "</span>";
              return output;
            }
            else if(currentDayName == days[3]){
              let output = "You were born on " + "<span>"+ currentDayName + "</span>" + ". Your Akan name is " + "<span>"+ femaleNames[3] + "</span>";
              return output;
            }
            else if(currentDayName == days[4]){
              let output = "You were born on " + "<span>"+currentDayName + "</span>" + ". Your Akan name is " + "<span> "+ femaleNames[4] + "</span>";
              return output;
            }
            else if(currentDayName == days[5]){
              let output = "You were born on " + "<span>"+currentDayName + "</span>" + ". Your Akan name is " + "<span> "+ femaleNames[5] + "</span>";
              return output;
            }
            else if(currentDayName == days[6]){
              let output = "You were born on " + "<span>"+currentDayName + "</span>" + ". Your Akan name is " + "<span> "+ femaleNames[6] + "</span>";
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
