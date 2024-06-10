const express = require('express');
import { getAllCheeses } from '../controllers/cheeseController';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Cheese:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - color
 *         - image
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the cheese
 *         name:
 *           type: string
 *           description: The name of the cheese
 *         color:
 *           type: string
 *           description: The color of the cheese
 *         image:
 *           type: string
 *           description: The URL of the cheese image
 *       example:
 *         id: 1
 *         name: Ricotta
 *         color: white
 *         image: url
 *     Price:
 *       type: object
 *       required:
 *         - cheese_id
 *         - price
 *       properties:
 *         cheese_id:
 *           type: integer
 *           description: The id of the cheese
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the cheese
 *       example:
 *         cheese_id: 1
 *         price: 8.90
 */

/**
 * @swagger
 * tags:
 *   name: Cheeses
 *   description: The cheeses managing API
 */

/**
 * @swagger
 * /api/cheeses:
 *   get:
 *     summary: Returns the list of all the cheeses
 *     tags: [Cheeses]
 *     responses:
 *       200:
 *         description: The list of the cheeses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cheese'
 */
router.get('/cheeses', getAllCheeses);

export default router;
