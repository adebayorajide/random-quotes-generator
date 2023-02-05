const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random"


async function getQuote(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "loading..."
        quoteEl.innerText = " updating ";
        authorEl.innerText = "updating";
    const response = await fetch(apiURL);
    const data = await response.json()
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.disabled = false;
    btnEl.innerText = "get a quote";
    console.log(data)
} catch (error) {
    btnEl.disabled = false;
    btnEl.innerText = "get a quote";
    quoteEl.innerText = " An error happened, try again later ";
    authorEl.innerText = " An error happened,check your conection ";
    quoteEl.style.color = "red";
    authorEl.style.color = "red";
        
}
};

getQuote();


btnEl.addEventListener("click", getQuote)