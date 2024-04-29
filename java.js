const quoteText = document.querySelector(".quote"),
authorName= document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy"),
shareBtn=document.querySelector(".share");


function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText="Loading Quote.....";
  
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
       console.log(result);
      quoteText.innerText=result.content;
      authorName.innerText=result.author;
      quoteBtn.innerText='New Quote';
      quoteBtn.classList.remove("loading");
      // Update the DOM with the fetched quote
    });
}
soundBtn.addEventListener("click",()=>{
  let utterance= new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(quoteText.innerText);

 });

 shareBtn.addEventListener("click",()=>{

 let instagramUrl=`https://www.instagram.com/ = ${quoteText.innerText}` ;
 window.open(instagramUrl,"__blank");
  });
  

quoteBtn.addEventListener("click", randomQuote);
