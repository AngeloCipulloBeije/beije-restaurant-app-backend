const express = require('express');
const cors = require('cors');

const bookingRoutes = require('./routes/bookingRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');

const initSwagger = require('./libs/swagger');

const app = express();

initSwagger(app)

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Errore di parsing JSON:', err.message);
        return res.status(400).json({ error: "Formato JSON non valido" });
    }
    next();
});

app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Risorsa non trovata' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://0.0.0.0:${PORT}`);
});