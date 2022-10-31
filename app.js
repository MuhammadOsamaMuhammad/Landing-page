/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
// let w = require('express')
// console.log(w);
let sections = document.getElementsByTagName('section')
let navbar = document.getElementById('navbar__list')
let mybutton = document.getElementById("myBtn");

navList = ()=>{
    for (const iterator of sections) {
        let s = document.createElement('li');
        let aTag = document.createElement('a');
        aTag.href = `#${iterator.id}`
        s.textContent = iterator.getAttribute('data-nav')
        aTag.appendChild(s)
        navbar.style.textAlign = "left"
        iterator.className = "your-active-class"
        navbar.appendChild(aTag)
    }
}

let scrollFunction= ()=> {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
let topFunction = ()=> {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navList();
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
// Scroll to section on link click

// Set sections as active


