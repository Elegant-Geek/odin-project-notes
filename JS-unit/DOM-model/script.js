// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm RED!";
paragraph.style.color = "red"; 
// console.log(paragraph.color);
container.appendChild(paragraph);

// an <h3> with blue text that says “I’m a blue h3!”
const sizeThreeHeader = document.createElement('h3');
sizeThreeHeader.textContent = "I'm a blue h3!";
sizeThreeHeader.style.color = "blue"; 
container.appendChild(sizeThreeHeader);
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div” and then a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const pinkDiv = document.createElement('div');
pinkDiv.style.border = "1px solid black"; 
pinkDiv.style.backgroundColor = "pink"; 
  const sizeOneHeader = document.createElement('h1');
  sizeOneHeader.textContent = "I'm in a div";
  pinkDiv.appendChild(sizeOneHeader);

  const paragraphMeToo = document.createElement('p');
  paragraphMeToo.textContent = "ME TOO!"; 
  pinkDiv.appendChild(paragraphMeToo);

container.appendChild(pinkDiv);

// TIP! It's smart to indent the stuff in this JS file too so you can see what is nested in which!