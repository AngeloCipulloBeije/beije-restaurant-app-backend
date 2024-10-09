const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Gestione delle recensioni
 */

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Recupera tutte le recensioni
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Lista delle recensioni recuperata con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get('/', reviewController.getAllReviews);

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Crea una recensione
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Recensione creata
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.post('/', reviewController.createReview);

module.exports = router;