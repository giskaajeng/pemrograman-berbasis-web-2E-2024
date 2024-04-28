document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lakukan verifikasi login (contoh: username=admin, password=admin)
    if (username === 'admin' && password === 'admin') {
        // Redirect ke halaman kalkulator jika login berhasil
        window.location.href = 'calculator.html';
    } else {
        alert('Login gagal. Silakan coba lagi.');
    }
});
