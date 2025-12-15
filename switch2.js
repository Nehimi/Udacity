var rating = "silver";
var bonus = "Bonus: ";

switch (rating) {
    case "gold":
        bonus += "Exclusive access, ";
    case "silver":
        bonus += "Early bird tickets, ";
    case "bronze":
        bonus += "Special thank you email.";
        break;
    default:
        bonus += "Standard rewards.";
}

console.log(bonus);