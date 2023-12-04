  // JavaScript interactions
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        section.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Perform actions with form data (e.g., send to server, display message)
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      
      // Reset form fields after submission (optional)
      this.reset();
    });
  });
