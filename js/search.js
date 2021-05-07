/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 *
 */
const xbtn = document.querySelector('#sbt');
const inputField = document.getElementById('srch');

const searchBtn = document.querySelector('.search-btn');
const searchBar = document.getElementById('serchBar');

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('hidden');
});

xbtn.addEventListener('click', () => {
  inputField.value = '';
});
