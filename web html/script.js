document.getElementById('signUpButton').addEventListener('click', function() {
    var link4 = document.getElementById('number4');
    console.log('Sign-up button clicked');
    link4.classList.remove('disabled');
    console.log('Link 4 should be enabled now');
    link4.classList.add('enabled');
});