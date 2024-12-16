// Example of form submission handling (could be extended for actual functionality)

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Message sent successfully!');
    // Here, you can add AJAX to submit form data to your server or email API
  } else {
    alert('Please fill in all fields.');
  }
});
