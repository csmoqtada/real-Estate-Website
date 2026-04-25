
function filterProperties(type) {

  var cards = document.querySelectorAll('.property-card');

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var cardType = card.getAttribute('data-type'); // e.g. "house" or "apartment"

    if (type === 'all') {
      // Show all cards
      card.style.display = 'block';
    } else if (cardType === type) {
      // Show only cards that match the selected type
      card.style.display = 'block';
    } else {
      // Hide cards that don't match
      card.style.display = 'none';
    }
  }
}



function sendMessage() {

  var name    = document.getElementById('name').value;
  var email   = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields before sending!');
    return; // Stop here if something is empty
  }

  alert('Thank you, ' + name + '! Your message has been sent. We will reply to ' + email + ' soon.');

  document.getElementById('name').value    = '';
  document.getElementById('email').value   = '';
  document.getElementById('message').value = '';
}

