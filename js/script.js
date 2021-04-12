function callingFunction() {
  function akanNaming() {
    let bday = document.getElementById("myDate").value;
    let gender = document.getElementById("gender").value
    let bdayArray = bday.split('-');
    //input validation
    if(bdayArray.length !== 3){
      alert("Invalid Date!!");
      throw new Error; //Abort javascript execution from here
      
    }
    else if(!bdayArray[0].match(/^\d\d\d\d$/) || !bdayArray[1].match(/^\d\d$/) || !bdayArray[2].match(/^\d\d$/)) {
      alert("invalid Date!!");
      throw new Error;  //Abort javascript execution from here
    }
    else if (gender.length===0) {
      alert("Please select your gender")
      throw new Error; //Abort javascript execution from here
        
    }
    else {
      document.getElementById("hidden").style.display = 'block';
      let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
      let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
      let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
      let currentTime = new Date(            
          parseInt(bdayArray[0]),
          parseInt(bdayArray[1]) - 1, //month starts from 0
          parseInt(bdayArray[2])
      );        
      let currentDay = currentTime.getDay();       
      let currentDayName= days[currentDay];
      switch(gender) {
        // if the user selects gender as male the following lines of codes executes
        case "Male":
          if (currentDayName == days[0]){
            let output = "You were born on: " + "<span>" +currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>" + maleNames[0] + "</span>";
            return output;
          }
          else if(currentDayName == days[1]){
            let output = "You were born on: " + "<span>" +currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>" + maleNames[1] + "</span>";
            return output;
          }
          else if(currentDayName == days[2]){
            let output = "You were born on: " + "<span>"+ currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>" + maleNames[2] + "</span>";
            return output;
          }
          else if(currentDayName == days[3]){
            let output = "You were born on: " + "<span>" +currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>" + maleNames[3] + "</span>";
            return output;
          }
          else if(currentDayName == days[4]){
            let output = "You were born on: "+ "<span>"+currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>" + maleNames[4] + "</span>";
            return output;
          }
          else if(currentDayName == days[5]){
            let output = "You were born on: "+ "<span>" +currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>" + maleNames[5] + "</span>";
            return output;
          }
          else if(currentDayName == days[6]){
            let output = "You were born on: " + "<span>" +currentDayName + "</span>"+"<br>" + " Your Akan name is: "+ "<span>" + maleNames[6] + "</span>";
            return output;
          }
        break;
        //when user select their gender as female the following lines of codes executes
        case "Female":
          if (currentDayName == days[0]){
            let output = "You were born on " + "<span>"+ currentDayName + "</span>"+"<br>" + ". Your Akan name is " + "<span>"+ femaleNames[0] + "</span>";
            return output;
          }
          else if(currentDayName == days[1]){
            let output = "You were born on: " + "<span>"+ currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>"+ femaleNames[1] + "</span>";
            return output;
          }
          else if(currentDayName == days[2]){
            let output = "You were born on: " + "<span>"+currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span>"+ femaleNames[2] + "</span>";
            return output;
          }
          else if(currentDayName == days[3]){
            let output = "You were born on: " + "<span>"+ currentDayName + "</span>"+"<br>"+ " Your Akan name is: " + "<span>"+ femaleNames[3] + "</span>";
            return output;
          }
          else if(currentDayName == days[4]){
            let output = "You were born on: " + "<span>"+currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span> "+ femaleNames[4] + "</span>";
            return output;
          }
          else if(currentDayName == days[5]){
            let output = "You were born on: " + "<span>"+currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span> "+ femaleNames[5] + "</span>";
            return output;
          }
          else if(currentDayName == days[6]){
            let output = "You were born on: " + "<span>"+currentDayName + "</span>"+"<br>" + " Your Akan name is: " + "<span> "+ femaleNames[6] + "</span>";
            return output;
          }
        break;
        // if unexpected input is received the following codes execute
        default:
          let output = "It seems we encountered a bug in our system program! Sorry for our inconviniences.";
          return output;
      }
    }    
  }
  document.getElementById("output").innerHTML = akanNaming();
  let frm = document.getElementsByName('form')[0]; 
  frm.reset();  // Clear form fields
  return false; // Prevent page refresh 
}
function clearMessage(){
  document.getElementById("hidden").style.display = 'none';
}
