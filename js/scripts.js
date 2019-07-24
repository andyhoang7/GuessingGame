let pcNumber = Math.floor(Math.random() * 100) + 1
console.log("PC Number is", pcNumber)

let availableGuesses = 5
document.getElementById("prompt").innerHTML = "Available Guesses: " + availableGuesses

let guessTotal = 0
const guesses = []

function guessUserNumber () {
    guessTotal += 1

    if (availableGuesses === 1) {
        document.getElementById("prompt").innerHTML = "Sorry! Please try again :)"
        return
    }

    const userGuess = document.getElementById("inputValue").value;
    
    if (userGuess > pcNumber) {
        document.getElementById("inputValue").value = "";
        document.getElementById("prompt").innerHTML = "Your number is too high: " + (availableGuesses -= 1) + " guesses left"
    }
    if (userGuess < pcNumber) {
        document.getElementById("inputValue").value = "";
        document.getElementById("prompt").innerHTML = "Your number is too low: " + (availableGuesses -= 1) + " guesses left"

    }
    if (userGuess == pcNumber) {
        document.getElementById("inputValue").value = "";
        if (guessTotal ==1 ) {
            document.getElementById("prompt").innerHTML = "Congratulations! You won in 1 guess!"
        } else {
            document.getElementById("prompt").innerHTML = "Congratulations! You won in " + guessTotal  + " guesses"
        }
    }

    guesses.push(userGuess)

    document.getElementById("guessesTracker").innerHTML = "";

    guesses.map(guess => {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(guess);
        node.appendChild(textnode);
        document.getElementById("guessesTracker").appendChild(node);
    })

}