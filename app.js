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
  var linkedIn = ''

  if (localStorage.getItem('userCv') == null){
    userName = getRandomString(20)
    localStorage.setItem('userCv', userName)
  }
  else{
    userName = localStorage.getItem('userCv')
  }
  
  //console.log(userName)
  function sendForm() {
    const datum = new FormData();
    datum.append('entry.731978348', userName);
    datum.append('entry.1118760234', linkedIn);
    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScTgB5u13efXrROfVWUcYyHXTksacCjRnMwtvmU9KKINP3jww/formResponse', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      mode: 'no-cors',
      body: datum,
    });

    
  }

  sendForm()
  
  var linkOpen = document.getElementById('linked')
  linkOpen.addEventListener('click', function(){
    linkedIn = 'Abierto'
    sendForm()
  })
  

});

