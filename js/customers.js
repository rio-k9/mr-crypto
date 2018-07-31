var customers = [
  "Rio Karim",
  "Marc Castro",
  "Marta Ayo",
  "Félix Borquez",
  "Manu Bustillo",
  "Lucas Abella",
  "Nahia Merced",
  "Luciano Larez"
];

var message = [
  ", bienvenido al <span>Mr. Crypto Academy.</span>",
  " se ha unido a <span>Mr. Crypto Academy.</span>",
  " ha comenzado el curso <span>Mr. Crypto Academy.</span>"
];

function callCustomer(){
  return customers[Math.floor(Math.random()*(customers.length))];
}

function callMessage(){
  return message[Math.floor(Math.random()*(message.length))];
}