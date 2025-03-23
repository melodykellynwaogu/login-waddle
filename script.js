document.grtElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefult();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Plase fill in all fields.');
        return;
    }

    console.log('login in with:', { email, password});
    alert('Login in successful! Redirecting....');

    window.location.href = 'dashboard';
});
document.grtElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefult();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Plase fill in all fields.');
        return;
    }

    console.log('signing in with:', { email, password});
    alert('sign in successful! Redirecting....');

    window.location.href = 'dashboard';
});

function  togglePassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwprdInput.type === 'password' ? 'text' : 'password';
}
function toggleemail() {
    const emailInput = document.getElementById('email');
    emailInput.type = emailInput.type === 'email' ? 'text' : 'email';
}
fetch('https://jsonplaceholder.typicalcode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));