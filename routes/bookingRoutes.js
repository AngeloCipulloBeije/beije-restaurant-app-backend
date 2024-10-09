// routes/bookingRoute.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Gestione delle prenotazioni
 */

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Recupera tutte le prenotazioni
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Lista delle prenotazioni recuperata con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 */
router.get('/', bookingController.getAllBookings);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Recupera una prenotazione per ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID della prenotazione
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prenotazione recuperata con successo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: Prenotazione non trovata
 */
router.get('/:id', bookingController.getBookingById);

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Crea una nuova prenotazione
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Prenotazione creata con successo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Dati di input non validi
 */
router.post('/', bookingController.createBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Aggiorna una prenotazione esistente
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID della prenotazione da aggiornare
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       200:
 *         description: Prenotazione aggiornata con successo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Dati di input non validi
 *       404:
 *         description: Prenotazione non trovata
 */
router.put('/:id', bookingController.updateBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Elimina una prenotazione
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID della prenotazione da eliminare
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prenotazione eliminata con successo
 *       404:
 *         description: Prenotazione non trovata
 */
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;