const quotes = [
    'Tetaplah Hidup walau tidak berguna',
    'Belajar itu wajib. Pintar itu bonus.',
    'Thanks for did your best.',
    'Arigatou',
    'Stay Strong untuk kita semua.',
    'Dunia ini penuh dengan kegelapan',
    'Panjang umur pengetahuan',
    'hadeh entah lah gabut gw :)'
];

const ubahQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('#keluhan').innerText = quote;

    setTimeout(ubahQuote, 2000);
}

ubahQuote();