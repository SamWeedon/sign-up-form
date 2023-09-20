let pass1 = document.querySelector('#user_password');
let pass2 = document.querySelector('#password_confirmation');
let form = document.querySelector('form');
let errorMessage = document.querySelector('.error-message-placeholder');

function checkPassword(event) {
    if (pass1.value !== pass2.value) {
        pass1.classList.add('error');
        pass2.classList.add('error');
        errorMessage.textContent = '* Passwords do not match'
        event.preventDefault(); // prevents form submission
    }
    else {
        pass1.classList.remove('error');
        pass2.classList.remove('error');
        errorMessage.textContent = '';
    }
}

form.addEventListener('submit', checkPassword);