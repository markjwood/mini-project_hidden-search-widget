const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('button.search');
const form = document.querySelector('form.search-container');
const animationTiming = +getComputedStyle(document.documentElement).getPropertyValue('--animation-timing').replace('ms', '');

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
  setTimeout(() => searchInput.classList.add('hide'), animationTiming + 5);
  alert('Searching for ' + searchInput.value);
});