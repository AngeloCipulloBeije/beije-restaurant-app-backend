const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: '404' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});