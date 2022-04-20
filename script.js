const btn = document.querySelectorAll('.btn');
const submit = document.getElementById('submit');
const ratingSection = document.querySelector('.rating');
const thankYouSection = document.querySelector('.thank-you');
const insertRating = document.querySelector('span');
let selected = '';


for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        btn[i].style.background = 'hsl(25, 97%, 53%)';
        selected = btn[i].firstChild.nodeValue;
        rating();
    });
}

function rating(){
    submit.addEventListener('click', function(){
        insertRating.textContent = selected;
        ratingSection.style.display = 'none';
        thankYouSection.style.display = 'inline-block'
        
    });
}



