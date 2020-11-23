document.addEventListener('DOMContentLoaded', function () {
  //alert("Ready!");     
  // visita
  const datum = new FormData();
  datum.append('entry.731978348', 'visitado');
  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScTgB5u13efXrROfVWUcYyHXTksacCjRnMwtvmU9KKINP3jww/formResponse', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    mode: 'no-cors',
    body: datum,
  });

});

