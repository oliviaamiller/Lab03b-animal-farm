const dogSound = document.getElementById('woof');
const dogImage = document.getElementById('dog');


const catSound = document.getElementById('meow');
const catImage = document.getElementById('cat');


const horseSound = document.getElementById('neigh');
const horseImage = document.getElementById('horse');

const whoSpokeLast = document.getElementById('who-spoke');


// let catClicks = 0;
// let dogClicks = 0;
// let horseClicks = 0;



dogImage.addEventListener('click', () => {
    dogSound.play();
    whoSpokeLast.textContent = 'Dog Barked';
});

catImage.addEventListener('click', () => {
    catSound.play();
    whoSpokeLast.textContent = 'Cat Meowed';

});

horseImage.addEventListener('click', () => {
    horseSound.play();
    whoSpokeLast.textContent = 'Horse Neighed';
});