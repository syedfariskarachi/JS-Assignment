var tatal_marks = 500;
var obt_marks = parseInt(prompt("Enter your obtain marks.\n Obt Marks = "));
let percentage = (obt_marks * 100)/500;
switch(true){
    case(percentage>=90):
    console.log("A+");
    break
    case(percentage>=75 && percentage <= 89):
    console.log("A");
    break
    case(percentage>=60 && percentage <= 74):
    console.log("B");
    break
    case(percentage>=45 && percentage <= 59):
    console.log("C");
    break
    case(percentage>=30 && percentage <= 44):
    console.log("D");
    break
    case(percentage>=0 && percentage <= 29):
    console.log("");
    break
}