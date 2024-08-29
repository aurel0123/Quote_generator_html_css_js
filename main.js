Textquote = document.querySelector('.quote'); 
quoteBtn = document.querySelector('button');
nameauthor = document.querySelector('.name'); 
btnspeechtext= document.querySelector('.sound');
btncopy = document.querySelector('.copy'); 

// utilisation de l'API fetch 
function randomquote(){
    quoteBtn.classList.add('loading'); 
    quoteBtn.innerHTML = "Loading..."; 
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(resultats =>{
        console.log(resultats); 
        Textquote.innerHTML = resultats.content ; 
        nameauthor.innerHTML = resultats.author;
        quoteBtn.innerHTML = "New Quote"
        quoteBtn.classList.remove('loading'); 
        
    })
}
quoteBtn.addEventListener('click', randomquote) ; 

//creation du bouton speecch , utilisation de l'api speech SpeechSynthesisUtterance

btnspeechtext.addEventListener('click', ()=>{
    let speech = new SpeechSynthesisUtterance(`${Textquote.innerText} by ${nameauthor.innerText}`); 
    speechSynthesis.speak(speech); 
})
btncopy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(Textquote.innerText); 
})
