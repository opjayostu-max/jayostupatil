document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // Check for saved theme or prefer-color-scheme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    document.body.classList.add('light');
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    themeIcon.className = 'fa-solid fa-moon';
  }
  
  // Theme toggle functionality
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light');
    
    if (document.body.classList.contains('light')) {
      themeIcon.className = 'fa-solid fa-sun';
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      localStorage.setItem('theme', 'dark');
    }
  });
});