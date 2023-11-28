const quotes=[
{
    quote: "First, solve the problem. Then, write the code.",
    author:"John Johnson",
},
{
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."  ,
    author: "Martin Fowler" ,
},
{
    quote: "Talk is cheap. Show me the code.",
    author:"Linus Torvalds",
},
{
    quote:"The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
}
]

const quote=document.querySelector("#fi");
const author=document.querySelector("#se");

const howLongQuote=quotes.length;
const number=Math.floor(Math.random()*howLongQuote);
const todaysQuote=quotes[number];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;