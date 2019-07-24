let pcNumber = Math.floor(Math.random() * 100) + 1
console.log("PC Number is", pcNumber)



function guessUserNumber () {
    const userGuess = document.getElementById("inputValue").value;
    
    if (userGuess > pcNumber) {
        alert("Your number is too high!")
        document.getElementById("inputValue").value = "";
    }
    if (userGuess < pcNumber) {
        alert("Your number is too low!")
        document.getElementById("inputValue").value = "";
    }
    if (userGuess == pcNumber) {
        alert("Your number is CORRECT!")
        document.getElementById("inputValue").value = "";
    }
}