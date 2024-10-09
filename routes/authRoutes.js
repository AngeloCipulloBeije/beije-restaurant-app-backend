const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticazione account
 */

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Ottieni token autenticazione
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       201:
 *         description: Token di accesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       400:
 *         description: Dati di input non validi
 */
router.post('/signin', authController.signIn);

module.exports = router;
