let user_num = parseFloat( prompt("Enter an floating  number :"));
let final_num =     Math.ceil(user_num);
alert(`Your number is around ${final_num}`);
let my_var = "This is my text";
let slicedText = my_var.slice(0, final_num); // Slice the string from 0 to roundedNum
let reverse_text ="";
for(let i = slicedText.length -1;i>=0;i--){
    reverse_text += slicedText[i]
    
}
alert(reverse_text)