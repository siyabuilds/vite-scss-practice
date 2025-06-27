const themeSwitcher = () => {
    const themeIcon = document.querySelector('.user-icon i');
    const savedTheme = localStorage.getItem('theme') || 'light';
    // Set initial icon based on saved theme
    themeIcon.className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  
    // Apply saved theme on load
    document.body.setAttribute('data-theme', savedTheme);
  
    // Add click event
    themeIcon.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeIcon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    });
  };

export { themeSwitcher };