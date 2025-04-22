const quotes = ["RIP boiling water, you will be mist.", 
    "Shouldn’t the “roof” of your mouth actually be called the ceiling?", 
    "When does a joke turn into a dad joke? When it becomes apparent.",
    "I used to be addicted to soap, but I’m clean now.",
    "I don’t trust stairs because they’re always up to something.",
    "I used to play piano by ear, but now I use my hands.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I’m reading a book on anti-gravity. It’s impossible to put down.",
    "I would tell you a chemistry joke, but I know I wouldn’t get a reaction.",
    "I used to be a baker, but I couldn’t make enough dough.",
    "I used to be a banker, but I lost interest.",
    "How does the moon cut his hair? Eclipse it.",
    "I was wondering why the frisbee kept getting bigger and bigger. Then it hit me.",
    "Wanna hear a joke about paper? Never mind. It's tearable.",
    "I used to be addicted to the hokey-pokey until I turned myself around.",
    "Why can't your hand be 12 inches long? Because then it would be a foot."
]

const generateQuote = quote => {
    return quote[Math.floor(Math.random() * quote.length)];
}

generateQuote(quotes);

export { generateQuote };
export default quotes;