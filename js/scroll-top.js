/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 *
 */
const returnToTop = document.getElementById('return-to-top');

window.addEventListener('scroll', a => {
  if (window.clientHeight >= screen.availHeight) {
    returnToTop.classList.add('visible');
  }
});

returnToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
