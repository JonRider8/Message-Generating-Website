import { generateQuote } from "./quotes.js";
import quotes from "./quotes.js";

let jokeText = document.getElementById("jokeText");

const updateJoke = () => {
    // Generate a random joke from the quotes array
    let joke = generateQuote(quotes);
    // Update the jokeText element with the new joke
    jokeText.innerText = joke;
    // Return the generated joke
    return joke;
}

jokeText.onclick = (updateJoke());