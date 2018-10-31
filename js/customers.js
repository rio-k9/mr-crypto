var customers = [
  "<b>Rio Karim</b>",
  "<b>Marc Castro</b>",
  "<b>Marta Ayo</b>",
  "<b>Félix Borquez</b>",
  "<b>Manu Bustillo</b>",
  "<b>Lucas Abella</b>",
  "<b>Nahia Merced</b>",
  "<b>Luciano Larez</b>"
];

var message = [
  ", bienvenido a <b>Mr. Crypto Academy.</b>",
  " se ha unido a <b>Mr. Crypto Academy.</b>",
  " ha comenzado el curso <b>Mr. Crypto Academy.</b>",

];

function callCustomer(){
  return customers[Math.floor(Math.random()*(customers.length))];
}

function callMessage(){
  return message[Math.floor(Math.random()*(message.length))];
}