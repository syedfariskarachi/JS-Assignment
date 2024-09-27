var inputValue = "clouD naTiVe pRograMinG";
inputValue = inputValue
    .split(' ')
    .map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
console.log(inputValue)

