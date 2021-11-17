const quotes = [
  {
    quote: "One person can make a difference, and everyone should try.",
    author: "John F. Kennedy",
  },
  {
    quote:
      "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air.",
    author: "John Quincy Adams",
  },
  {
    quote:
      "In the end, it’s not the years in your life that count. It’s the life in your years",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "It is hard to fail, but it is worse never to have tried to succeed.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "You most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
  },
  {
    quote: "Love asks me no questions, and gives me endless support.",
    author: "William Shakespeare",
  },
  {
    quote:
      "To love and win is the best thing. To love and lose, is the next best thing.",
    author: "William Thackeray",
  },
  {
    quote:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author: "Anonymous",
  },
  {
    quote: "The way to love anything is to realize that it might be lost.",
    author: "G.K. Chesterton",
  },
  {
    quote: "The supreme happiness in life is the conviction that we are loved.",
    author: "Victor Hugo",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
