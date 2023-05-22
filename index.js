var inputnom = document.querySelector('input[name="lastname"]');
var inputprenom = document.querySelector('input[name="firstname"]');
var inputemail = document.querySelector('input[name="email"]');
var inputwebsite = document.querySelector('input[name="website"]');
var btnsub = document.querySelector('input[name="submit"]');
var btncancel = document.querySelector('input[name="cancel"]');
var yourDescription = document.querySelector('.your_description');
var description = document.querySelector('textarea[name="description"]')

function validation() {
  var nom = inputnom.value;
  var prenom = inputprenom.value;
  var email = inputemail.value;
  var website = inputwebsite.value;
  var description = document.querySelector('textarea[name="description"]').value;

  if (nom === '' || prenom === '' || email === '' || website === '') {
    alert('Tous les champs sont obligatoires !');
    if (nom === '') {
      inputnom.style.border = '1px solid red';
    }
    if (prenom === '') {
      inputprenom.style.border = '1px solid red';
    }
    if (email === '') {
      inputemail.style.border = '1px solid red';
    }
    if (website === '') {
      inputwebsite.style.border = '1px solid red';
    }
    return;
  }

  inputnom.style.border = '';
  inputprenom.style.border = '';
  inputemail.style.border = '';
  inputwebsite.style.border = '';

  var descriptionHTML = `
    <h6>${nom} ${prenom}</h6>
    <p>Email: ${email}</p>
    <p>Site Web: ${website}</p>
    <h5>Description</h5>
    <p>${description}</p>
  `;
  yourDescription.innerHTML = descriptionHTML;
}

function vide() {
  inputnom.value = '';
  inputprenom.value = '';
  inputemail.value = '';
  inputwebsite.value = '';
  description.value = '';
  inputnom.style.border = '';
  inputprenom.style.border = '';
  inputemail.style.border = '';
  inputwebsite.style.border = '';
  yourDescription.innerHTML = '';
}

btnsub.addEventListener('click', validation);
btncancel.addEventListener('click', vide);
