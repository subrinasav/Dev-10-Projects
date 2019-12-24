/*
    Name: Subrina Persaud
    Date Created: December 6th, 2019
    Most recent revision:December 25th, 2019
*/
function validateInfo () {
  var nameInput = document.getElementById("name"),
    emailInput = document.getElementById("email"),
    phoneInput = document.getElementById("phone"),
    reasonInput = document.getElementById("reason"),
    infoIntput = document.getElementById("info");

  var message = "";

  // Contact Form
  if (!(nameInput.value && emailInput.value && phoneInput.value)) {
    if(!nameInput.value) message+="\u25B6 Please enter your name\n\n"
  }

  // If Reason for Inquiry's dropdown is selected to Other, make sure that the Additional Information is filled in.
  if (reasonInput.value == "other" && !infoIntput.value) {
    message+="\u25B6 Since you selected Other for your Reason for Inquiry please tell us what that reason is in the Additional Information section\n\n";
  }

  // Best Days to Contact
  var daysToContact = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (daysToContact < 1) {
    message+="\u25B6 Please select the day that is best to contact you\n\n";
  }

  if (message) {
    alert(message);
    return false;
  }
  else{
  alert("Your request has been succesfully submitted! Thank You!")
  }
}
