// Change the span with the class `mess-with-me-more` to have a font size of 40px.
let span = document.querySelector('.mess-with-me');
span.style.fontSize = '40px';

// Change the paragraph with the class `mess-with-me` to have a background color of green.
let paragraph = document.querySelector('.mess-with-me-paragraph');
paragraph.style.backgroundColor = 'green';

// Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space.
let hideMe = document.querySelector('#hide-me-area');
hideMe.style.height = 0;

// Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
let triImg = document.querySelector('#triceratops');
triImg.style.width = '324px';

// Add an event listener to the span with the class `mess-with-me-more` so that when it is clicked, the font color changes to orange.
span.addEventListener('click', function() {
  span.style.color = 'orange';
});

// Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
let firstDinoImg = document.querySelector('#triceratops');
firstDinoImg.addEventListener('click', function() {
  firstDinoImg.style.border = '5px solid red';
});

// Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
let featheredImg = document.querySelector('#feathers');
featheredImg.addEventListener('click', function() {
  featheredImg.style.opacity = '0.5';
});

// Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.
let toggleButton = document.querySelector('#toggle');
let dinosaurRow = document.querySelector('#row');
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
let biggifyImg = document.querySelector('#biggify');
biggifyImg.addEventListener('mouseover', function() {
  biggifyImg.style.width = '200px';
});

biggifyImg.addEventListener('mouseout', function() {
  biggifyImg.style.width = '162px';
});

