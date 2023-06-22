document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchPopup = document.getElementById('search-popup');
    const searchButton = document.getElementById('search-button');
  
    searchIcon.addEventListener('click', () => {
      searchPopup.style.display = 'block';
    });
  
    searchButton.addEventListener('click', () => {
      searchPopup.style.display = 'none';
    });
  });
  

  