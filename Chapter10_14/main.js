let num1 = Number(prompt("Enter first number:"))
let num3 = prompt("Enter operation:")
let num2 = Number(prompt("Enter second number:"))
if(num3=="*"){
    alert(num1*num2)
}else if(num3=="+"){
    alert(num1+num2)
}else if(num3=="-"){
    alert(num1-num2)
}else if(num3=="/"){
    alert(num1/num2)
}else{
    alert("Invalid operater")
}