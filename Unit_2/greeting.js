/* practicing this script that displays a greeting to the user according to the current time.
It is an example from "JavaScript & jQuery" By Jon Duckett (2014). */

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening.';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon.';
} else if (hourNow > 0) {
    greeting = 'Good Morning.';
} else {
    greeting = 'Welcome.';
}
document.write(greeting);