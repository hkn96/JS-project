/**
 * CSS-ANIMATIONS
 * Toggle the class "hidden" from the element with the id "menu", when the user clicks on the element with the id "menu-btn"
 *
 */

const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
