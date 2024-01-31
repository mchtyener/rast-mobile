const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;


db.on('error', (err) => {
    console.error('MongoDB\'ye bağlanırken hata oluştu:', err);
});

