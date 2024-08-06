document.querySelector('fcf-form-id').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.querySelector('Name').value;
  var email = document.querySelector('Email').value;
  var message = document.querySelector('Message').value;

  if (name.length === 0 || email.length === 0 || message.length === 0) {
    alert('Please fill in all fields.');
    return;
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    alert('Please enter a valid email address.');
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'contact-form-process.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Message sent successfully!');
      document.querySelector('#Name').value = '';
      document.querySelector('#Email').value = '';
      document.querySelector('#Message').value = '';
    } else {
      alert('An error occurred. Please try again later.');
    }
  };
  xhr.send(encodeURI('Name=' + name + '&Email=' + email + '&Message=' + message));
  return false;
});

var navbar = document.querySelector('.navbar');
var dropdowns = document.querySelectorAll('.dropdown');

navbar.addEventListener('click', function(event) {
  if (event.target.classList.contains('dropdown-toggle')) {
    event.preventDefault();
    var dropdown = event.target.nextElementSibling;
    dropdown.classList.toggle('show');
  }
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('show');
    });
  }
});
