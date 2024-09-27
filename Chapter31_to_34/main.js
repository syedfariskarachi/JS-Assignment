// Get user's name
var name = prompt("Please enter your name:"); // Example: "Ameen Alam"

// Get user's DOB details
var day = prompt("Please enter your birth day:"); // Example: "24"
var month = prompt("Please enter your birth month (MM):"); // Example: "05"
var year = prompt("Please enter your birth year (YYYY):"); // Example: "1999"

// Get current date and time
var now = new Date();
var currentHour = now.getHours();

// Determine appropriate greeting using switch
var greeting;
switch (true) {
  case (currentHour < 12):
    greeting = "Good Morning";
    break;
  case (currentHour >= 12 && currentHour < 17):
    greeting = "Good Afternoon";
    break;
  case (currentHour >= 17 && currentHour < 21):
    greeting = "Good Evening";
    break;
  default:
    greeting = "Good Night";
}

// Print greeting message
console.log(`Hello ${name}, ${greeting}`);

// Construct the user's DOB
var dob = new Date(`${year}-${month}-${day}`);
var options = { timeZone: "Asia/Karachi", year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
var dobFormatted = dob.toLocaleString('en-PK', options);

// Print the DOB in Pakistan Standard Time format
console.log(`Your DOB is ${dobFormatted}`);

// Calculate the age
var ageInMilliseconds = now - dob;
var ageDate = new Date(ageInMilliseconds);

// Years, months, days, hours, minutes, and seconds
var years = ageDate.getUTCFullYear() - 1970;
var months = ageDate.getUTCMonth();
var days = ageDate.getUTCDate() - 1;
var hours = ageDate.getUTCHours();
var minutes = ageDate.getUTCMinutes();
var seconds = ageDate.getUTCSeconds();

// Print detailed age
console.log(`You are ${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds old.`);

// Calculate age in days
var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

// Print age in days
console.log(`Your age in days: ${ageInDays}`);

// Calculate time left until next birthday
var nextBirthday = new Date(now.getFullYear(), month - 1, day);
if (nextBirthday < now) {
  nextBirthday.setFullYear(now.getFullYear() + 1); // If the birthday this year already passed
}

var timeLeft = nextBirthday - now;

// If today is the birthday
if (timeLeft <= 0) {
  console.log(`Happy Birthday ${name}! Today is your ${years + 1}th birthday.`);
} else {
  var timeLeftDate = new Date(timeLeft);

  var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hoursLeft = timeLeftDate.getUTCHours();
  var minutesLeft = timeLeftDate.getUTCMinutes();
  var secondsLeft = timeLeftDate.getUTCSeconds();

  // Print time left until next birthday
  console.log(`How much time left until your next birthday? ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds.`);
}
