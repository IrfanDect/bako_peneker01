const https = require('https');
const readline = require('readline');

// Membuat interface untuk user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getHeaders(url) {
    https.get(url, (response) => {
        console.log('Headers:', response.headers);
        rl.close(); // Menutup interface setelah mendapatkan header
    }).on('error', (e) => {
        console.error(`Error: ${e.message}`);
        rl.close(); // Menutup interface jika terjadi error
    });
}

// Meminta input dari user
rl.question('Masukkan URL: ', (url) => {
    getHeaders(url);
});
