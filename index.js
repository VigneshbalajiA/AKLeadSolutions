
// Scrolling
document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById('boxInner');
    const scrollAmount = 200;

    document.querySelector('.arrow-left').addEventListener('click', function() {
        box.scrollLeft -= scrollAmount;
        behavior: 'smooth'
    });

    document.querySelector('.arrow-right').addEventListener('click', function() {
        box.scrollLeft += scrollAmount;
        behavior: 'smooth'
    });
});


// Contact Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw_nZoK-TMZjDxuX132RRG0wzsijw1HLlOPn0934dAfW_-H7ynXOkvripyhConqb3Rf9w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully ! We will Reach you soon"
        setTimeout(function(){
            msg.innerHTML =""
},30000)
form.reset()
})
    .catch(error => console.error('Error!', error.message))
})
