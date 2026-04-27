const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
document.getElementById('generateButton').addEventListener('click', () => {
    const lengthInput = document.getElementById('length').value;
    const passwordLength = parseInt(lengthInput);

    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert('Please enter a valid password length!');
        return;
    }
    const newPassword = generatePassword(passwordLength);
    document.getElementById('passwordDisplay').textContent = newPassword;
});
function copyToClipboard() {
    const password = document.getElementById('passwordDisplay').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
document.getElementById('passwordDisplay').addEventListener('click', copyToClipboard);
