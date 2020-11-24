document.addEventListener('DOMContentLoaded', function () {
  //alert("Ready!");     
  // visita
  function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  var userName = ''

  if (localStorage.getItem('userCv') == null){
    userName = getRandomString(20)
    localStorage.setItem('userCv', userName)
  }
  else{
    userName = localStorage.getItem('userCv')
  }
  
  //console.log(userName)

  const datum = new FormData();
  datum.append('entry.731978348', userName);
  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScTgB5u13efXrROfVWUcYyHXTksacCjRnMwtvmU9KKINP3jww/formResponse', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    mode: 'no-cors',
    body: datum,
  });

  

});

