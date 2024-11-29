// Quote Array
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "In the end, it's not the years in your life that count, it's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Don’t let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: "Peter Drucker"
    }
];


// Select the quote and author container elements
const quoteElement = document.getElementById('quote');
const authorElement = document.createElement('p');
authorElement.id = 'author';
quoteElement.after(authorElement);



// function
function generateRandomQuote() {
  const randomIndex = Math.floor (Math.random() * quotes.length);

    // Get the random quote and author
    const randomQuote = quotes[randomIndex].quote;
    const randomAuthor = quotes[randomIndex].author;
    
    // Set the random quote and author to the respective elements
    quoteElement.textContent = `"${randomQuote}"`;
    authorElement.textContent = `- ${randomAuthor}`;


}

// Add event listener to the button
const button = document.getElementById('generate-quote');
button.addEventListener('click', generateRandomQuote);