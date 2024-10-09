const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'app.db'), (err) => {
    if (err) {
        console.error('Errore durante la connessione al database:', err.message);
    } else {
        console.log('Connessione al database riuscita.');

        db.run(`CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            num_people INTEGER,
            booking_date TEXT,  
            notes TEXT)`
        );


        db.run(`CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT,
            customer_job TEXT,
            text TEXT)`
        );
    }
});

module.exports = db;