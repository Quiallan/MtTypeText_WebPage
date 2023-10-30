const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const firstNameDisplay = document.getElementById('first-name-display');
const lastNameDisplay = document.getElementById('last-name-display');

function updateName() {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  firstNameDisplay.innerText = firstName || 'First';
  lastNameDisplay.innerText = lastName || 'LastName';
}

firstNameInput.addEventListener('input', updateName);
lastNameInput.addEventListener('input', updateName);
