const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');

/**
 * @swagger
 * tags:
 *   name: Settings
 *   description: Impostazioni del sito
 */


/**
 * @swagger
 * /api/settings:
 *   get:
 *     summary: Recupera le impostazioni del sito.
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: Lista delle impostazioni recuperata con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Setting'
 */
router.get('/', settingsController.getSettings);


module.exports = router;
