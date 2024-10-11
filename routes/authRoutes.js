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

/**
 * @swagger
 * /api/auth/userme:
 *   post:
 *     summary: Ottieni informazioni utente
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Token di autenticazione
 *             required:
 *               - token
 *     responses:
 *       201:
 *         description: Token di accesso generato con successo
 *       400:
 *         description: Dati di input non validi
 */
router.post('/userme', authController.userMe);

module.exports = router;
