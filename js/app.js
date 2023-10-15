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

let navbarList = document.getElementById("navbar__list");
var sections = document.querySelectorAll("section[id*='section']");
sections.forEach((rs, index) => {
  let item = document.createElement("li");
  item.textContent = `Section ${index + 1}`;
  item.id = `section-${index + 1}`;
  navbarList.appendChild(item);
});

// Add class 'active' to section when near top of viewport

function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (
      box.top >= -1 &&
      box.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      //apply active state on current section and corresponding Nav link
      section.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("active");
    }
  }
}
window.addEventListener("scroll", makeActive);
makeActive();
// Scroll to anchor ID using scrollTO event
var navbar = document.getElementById("navbar__menu");
navbar.addEventListener("click", function (event) {
  let a = `section${event.target.id.split("-")[1]}`;
  let b = document.getElementById(a);
  if (b) {
    window.scrollTo({
      top: b.offsetTop,
      behavior: "smooth",
    });
  }
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
