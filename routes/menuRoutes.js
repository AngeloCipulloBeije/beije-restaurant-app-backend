const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: Menu del ristorante
 */

/**
 * @swagger
 * /api/menu:
 *   get:
 *     summary: Ottieni menù del ristorante
 *     tags: [Menu]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           example: "Pizza"
 *         required: false
 *         description: "Filtra per categoria: 'Dryck', 'Pizza', 'Tillbehör'"
 *     responses:
 *       201:
 *         description: Menu del ristorante
 *       400:
 *         description: Dati di input non validi
 */
router.get('/', menuController.getMenuItems);


module.exports = router;
