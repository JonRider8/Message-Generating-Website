import { generateQuote } from "./quotes.js";
import quotes from "./quotes.js";

// Global variables
let jokeText = document.getElementById("jokeText");
let copyText = document.getElementById("shareText");
let jokeVisible = false;

const updateJoke = () => {
    // Generate a random joke from the quotes array
    let joke = generateQuote(quotes);
    // Update the jokeText element with the new joke
    jokeText.innerText = joke;
    // Return the generated joke
    jokeText.removeEventListener("click", updateJoke);
    // Set the jokeVisible variable to true to indicate that the joke is now visible
    jokeVisible = true;
    return joke;
}

const copyToClipboard = () => {
    if(jokeVisible === true){
        // Copy the joke text to the clipboard
        navigator.clipboard.writeText(jokeText.innerText).then(() => {
            // Change the copyText element to indicate success
            copyText.innerText = "Copied!";
            // Reset the copyText element after 2 seconds
            setTimeout(() => {
                //\uD83D\uDD17 is the link emoji
                copyText.innerText = "Click here to share this joke!\uD83D\uDD17";
            }, 2000);
        });
    }
}

// event listeners for jokeText and copyText
jokeText.addEventListener("click", updateJoke);
copyText.addEventListener("click", copyToClipboard);