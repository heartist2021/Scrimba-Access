// popup.js
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('openScrimba').addEventListener('click', () => openScrimba('https://www.scrimba.com/'));
  document.getElementById('openCommunity').addEventListener('click', () => openScrimba('https://scrimba.com/community'));
  document.getElementById('openPodcast').addEventListener('click', () => openScrimba('https://scrimba.com/podcast'));
  document.getElementById('openYouTube').addEventListener('click', () => openScrimba('https://www.youtube.com/channel/UCNW7HDseZb6N3nKUEP6uLag'));
  document.getElementById('openProCourses').addEventListener('click', () => openScrimba('https://scrimba.com/allcourses?price=paid'));
  document.getElementById('openFreeCourses').addEventListener('click', () => openScrimba('https://scrimba.com/allcourses?price=free'));

  function openScrimba(url) {
    chrome.tabs.create({ url });
  }
});
