const themeButtonEl = document.getElementById('theme-btn');

themeButtonEl.onclick = () => {
  console.log('working');

  document.documentElement.classList.toggle('dark');
};
