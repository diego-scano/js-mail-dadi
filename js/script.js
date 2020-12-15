document.getElementById('container').style.fontSize = 'x-large';

var output = document.getElementById('container');
var mail = prompt('Inserisci il tuo indirizzo eMail');
var mailList = ['pinco.pallo@google.it', 'diego.scano77@gmail.com', 'topolino.casa@disney.it', 'paperino.zio@paperopoli.com'];

if(!mailList.includes(mail)) {
  output.innerText = 'Accesso negato';
} else {
  output.innerText = 'Benvenuto ' + mail + '! \nOra lanceremo i dadi!';

  var min = 1;
  var max = 6;
  var userNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);

  output.append('\n\nIl tuo numero :' + userNumber + '\nIl numero del computer: ' + pcNumber);

  if(userNumber < pcNumber) {
    output.append('\n\nMi dispiace hai perso!');
  } else if(userNumber === pcNumber) {
    output.append('\n\nPari! Il tiro è da ripetere!')
  } else {
    output.append('\n\nComplimenti hai vinto!');
  }
}
