        module.exports = (req, res) => {
            res.status(404).json({ message: 'Not Found' });
        };
          // Smooth Scrolling
          document.querySelectorAll('.nav a').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                  e.preventDefault();
                  document.querySelector(this.getAttribute('href')).scrollIntoView({
                      behavior: 'smooth'
                  });
              });
          });
  
          // Modals
          const modals = document.querySelectorAll('.modal');
          const projectLinks = document.querySelectorAll('.project-link');
          const closeButtons = document.querySelectorAll('.close');
  
          projectLinks.forEach(link => {
              link.addEventListener('click', (event) => {
                  event.preventDefault();
                  document.getElementById(link.getAttribute('data-modal')).style.display = 'block';
              });
          });
  
          closeButtons.forEach(button => {
              button.addEventListener('click', () => {
                  modals.forEach(modal => modal.style.display = 'none');
              });
          });
  
          window.addEventListener('click', (event) => {
              if (event.target.classList.contains('modal')) {
                  modals.forEach(modal => modal.style.display = 'none');
              }
          });
  
          // Social Media Links
          document.querySelectorAll('.social-media a').forEach(link => {
              link.addEventListener('click', event => {
                  event.preventDefault();
                  window.open(link.href, '_blank');
              });
          });