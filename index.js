
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


// name validation
const name = document.getElementById("name");

function nameValidate(name) {
    const letters = /^[a-z]*$/i;
    document.getElementById("msg").style.color = "red";
    if (!name.value.match(letters)) {
        msg.innerHTML = "Numbers or special Charecters are not allowed in Name";
        document.getElementById("submit").setAttribute("disabled", true)
        return false;
    } else {
        document.getElementById("submit").removeAttribute("disabled", true)
        msg.innerHTML = "";
        return true;
    }
}


// Contact Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw_nZoK-TMZjDxuX132RRG0wzsijw1HLlOPn0934dAfW_-H7ynXOkvripyhConqb3Rf9w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById("msg").style.color = '#2ea043';
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
