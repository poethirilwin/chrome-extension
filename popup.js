document.addEventListener('DOMContentLoaded', function () {
    // Get button by ID
    var button = document.getElementById('loginBtn');
    button.onclick = () => {
      chrome.tabs.create(
        { url: `https://mccivcmm.com/login.php` }
      )
    }
  });