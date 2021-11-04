const dogSound = document.getElementById('woof');
const dogImage = document.getElementById('dog');

const catSound = document.getElementById('meow');
const catImage = document.getElementById('cat');

const horseSound = document.getElementById('neigh');
const horseImage = document.getElementById('horse');


dogImage.addEventListener('click', () => {
  dogSound.play();
});

catImage.addEventListener('click', () => {
  catSound.play();
});

horseImage.addEventListener('click', () => {
  horseSound.play();
});