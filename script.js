const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('button.search');
const form = document.querySelector('form.search-container');

// get the --transition-timing css variable, delete "ms" from it, and convert it to a number
const transitionTiming = +getComputedStyle(document.documentElement).getPropertyValue('--transition-timing').replace('ms', '');

searchBtn.addEventListener('click', () => {
  if (searchInput.classList.contains('hide')) {
    searchInput.classList.remove('shrink');
    setTimeout(() => {
      searchBtn.setAttribute('type', 'submit');
      searchInput.classList.remove('hide');
      searchInput.focus();
  }, 100);
  }
});

form.addEventListener('submit', () => {
  searchBtn.setAttribute('type', 'button');
  searchInput.classList.add('shrink');
  setTimeout(() => searchInput.classList.add('hide'), transitionTiming + 5);
  alert('Searching for ' + searchInput.value);
});