var day = 3;
var message = "Today is ";

switch (day) {
    case 1:
    case 2:
        message += "a weekday. ";
    case 3:
    case 4:
        message += "the middle of the week. ";
    case 5:
        message += "almost the weekend. ";
        break;
    case 6:
        message += "Saturday! ";
   
case 5:
    message += "almost the weekend. ";
    break; // <-- The break is here, but we are falling through from case 3
case 6: // Execution will fall through here too!
    message += "Saturday! ";
default: // Execution will fall through here too!
    message += "a great day!";
}

console.log(message);