document.getElementById('signUpButton').addEventListener('click', function() {
    var number4 = document.getElementById('number4');
    console.log('Sign-up button clicked');
 number4.classList.remove('disabled');
    console.log('Link 4 should be enabled now');
 number4.classList.add('enabled');
});