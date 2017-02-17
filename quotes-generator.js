var quotes = [
  '"¡Váyase, señor Cuesta! ¡Váyase!"    - Concha',
  '"¡Ignorante de la vida!"     -  Mariano',
  '"¡Un poquito de por favor!"    - Emilio',
  '"¡Qué mona va esta chica siempre!"    - Marisa',
  '"¡Chorizo!"    - Concha',
  '"Soy Mariano Delgado, metrosexual y pensador"   - Mariano',
  '"¡Vete un poquito a la mierda!"    - Belén',
  '"¡Radio Patio, 24 horas!"    - Marisa',
  '"Bueno, pero tranquilito ¿eh?"    - Jose Miguel',
  '"Juan Cuesta, presidente de esta, nuestra comunidad"    - Juan',
  '"¡Cipote!"    - Emilio',
  '"¡Movida,movida!"    - Marisa',
  '"Fantasmas aquí no eh Juan, fantasmas aquí, ¡no!"   - Paloma',
  '"¡Y punto en Boca!"    - Paloma',
  '"¡Qué follón"    - Juan',
  '"¡Me cago en todo lo cagable!"    - Emilio',
  '"Uuuuuuuuuuu, qué estrés todo, yo me voy a hacer una pipa"    - Isabel',
  '"¡Y qué le importa a esta gente lo que me hizo a mí Manolo!"    - Marisa',
  '"¡Golfas!"     - Concha',
  '"Un pitillo, un traguito de chinchón... ¡y a la cama!"     - Marisa',
  '"¡Hombre ya!"    - Paloma',
  '"Don Bartolomé Méndez Zuloaga, maestro y mentor"     - Juan',
  '"Me cago en tu puta madre"    - mariano',
  '"¡Qué no son horas!"     - Concha',
  '"También a Marisa la dejó Manolo"     - Vicenta',
  '"Y lo digo sin acritud ¡pero lo digo!"     - Juan',
  '"¡Qué cabrón!"     - Paco',
  '"Ésta, nuestra comunidad"     - Juan',
  '"¡Yo no pago!"     - Concha',
  '"¡Tonta , hija es que eres tonta!"     - Maria Jesus',
  '"Queridos convecinos"     - Juan',
  '"Eso lo sacaste del gen lopez de tu padre     - Maria Jesus',
  '"Mátala, mátala"    - Isabel',
];


document.getElementById('randomQuote').addEventListener('click', randomQuote);
  var r = Math.floor(Math.random() * (quotes.length));
  quote = quotes[r];
  document.getElementById('quote').innerHTML = quote;
  $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+quote);

function randomQuote() {
  var r = Math.floor(Math.random() * (quotes.length));
  quote = quotes[r];
  document.getElementById('quote').innerHTML = quote;
  $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+quote);

};

