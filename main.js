// Change the span with the class `mess-with-me-more` to have a font size of 40px.
const spanMessWithMeMore = document.querySelector('.mess-with-me-more');
spanMessWithMeMore.style.fontSize = '40px';

// Change the paragraph with the class `mess-with-me` to have a background color of green.
const paragraphMessWithMe = document.querySelector('.mess-with-me');
paragraphMessWithMe.style.backgroundColor = 'green';

// Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space.
const hideMeArea = document.querySelector('#hide-me-area');
hideMeArea.style.height = 0;

// Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
const triceratopsImg = document.querySelector('#triceratops');
triceratopsImg.style.width = '324px';

// Add an event listener to the span with the class `mess-with-me-more` so that when it is clicked, the font color changes to orange.
spanMessWithMeMore.addEventListener('click', function() {
  spanMessWithMeMore.style.color = 'orange';
});

// Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
const firstDinosaurImg = document.querySelector('#triceratops');
firstDinosaurImg.addEventListener('click', function() {
  firstDinosaurImg.style.border = '5px solid red';
});

// Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
const featheredDinosaurImg = document.querySelector('#feathers');
featheredDinosaurImg.addEventListener('click', function() {
  featheredDinosaurImg.style.opacity = '0.5';
});

// Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.
const toggleButton = document.querySelector('#toggle');
const dinosaurRow = document.querySelector('#row');
let toggled = false;

toggleButton.addEventListener('click', function() {
  if (toggled === false) {
    dinosaurRow.style.backgroundColor = 'purple';
    toggled = true;
  } else {
    dinosaurRow.style.backgroundColor = 'white';
    toggled = false;
  }
});

// Add an event listener to the dinosaur image with id "biggify" to increase its width to 200 pixels when it is hovered over
const biggifyDinosaurImg = document.querySelector('#biggify');
biggifyDinosaurImg.addEventListener('mouseover', function() {
  biggifyDinosaurImg.style.width = '200px';
});

biggifyDinosaurImg.addEventListener('mouseout', function() {
  biggifyDinosaurImg.style.width = '162px';
});

