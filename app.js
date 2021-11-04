const dogSound = document.getElementById('woof');
const dogImage = document.getElementById('dog');


const catSound = document.getElementById('meow');
const catImage = document.getElementById('cat');


const bearSound = document.getElementById('roar');
const bearImage = document.getElementById('bear');

const whoSpokeLast = document.getElementById('who-spoke');


// let catClicks = 0;
// let dogClicks = 0;
// let horseClicks = 0;



dogImage.addEventListener('click', () => {
    dogSound.play();
    whoSpokeLast.textContent = 'the Dog Barked';
});

catImage.addEventListener('click', () => {
    catSound.play();
    whoSpokeLast.textContent = 'the Cat Meowed';

});

bearImage.addEventListener('click', () => {
    bearSound.play();
    whoSpokeLast.textContent = 'the Bear Roared';
});