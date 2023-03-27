// Aufgabenstellung:

// Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:

// Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
// Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

// Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.


const userChoice = window.prompt("Put a number")
const computerChoice = Math.floor(Math.random() * 3)


if (computerChoice == userChoice) {
    console.log("You guessed right" + userChoice);

} else {
    console.log("Computer choice " + computerChoice);
}