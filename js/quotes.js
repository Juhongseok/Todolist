const quote = document.querySelector("#quote");
const quotes = ["Don't dwell on the past",
                "Believe in yourself",
                "Follow your heart",
                "Seize the day",
                "You only live once",
                "Past is just past",
                "Love yourself",
                "Where there is a will there is a way",
                "Don't beat yourself up",
                "Life is a journey",

                "Don't dream, Be it",
                "No pain, No gain",
                "This too shall pass away",
                "The die is cast",
                "Whe they go low, we go high",
                "I was never less alone than when by myself",
                "A friend is a second myself",
                "I don't want a perfect life, I want a happy life",
                "Courage is very important when it comes to anything",
                "Be brave",

                "Every cloud has a silver lining",
                "Don't judge a book by its cover",
                "Hang it there",
                "This is how life is",
                "The harder you work, the more likely you can reach the goal",
                "Live positive",
                "Seeing is believing",
                "He can do, She can do, Why not me?",
                "If not now, then when?",
                "You deserve to be loved",
                "Time waits for no one"
];

const date = new Date().getDate();
quote.innerText = quotes[date-1];