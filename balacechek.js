var balance=50.00;
var isActive=true;
var checkBalance="yes"

if (checkBalance==="yes"){
    if(isActive===true && balance>0){
        console.log("your balance is $"+balance.toFixed(2)+".");
    }
    else if (isActive===false){
        console.log("your acount is no longer active");    }
        else if(balance===0){
            console.log("your acount is empty");
        }
        else{
            console.log("your balance is negative. please contact bank");
        }
}
else{
    console.log("thank you. have a nice day!")
}