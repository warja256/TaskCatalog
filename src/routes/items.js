const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const { validateItem } = require('../utils/validator');

// Получение всех элементов
router.get('/', (req, res) => {
  res.json(Item.getAll());
});

// Получение элемента по ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10); 
  const item = Item.getById(itemId);
  if (!item) {
    return res.status(404).json({
      error: {
        code: 'NOT_FOUND',
        message: 'Item not found',
        requestId: req.requestId,
      },
    });
  }
  res.json(item);
});

// Создание нового элемента
router.post('/', (req, res) => {
  const { error } = validateItem(req.body);
  if (error) {
    return res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: error.details[0].message,
        requestId: req.requestId,
      },
    });
  }
  const newItem = Item.create(req.body);
  res.status(201).json(newItem);
});

module.exports = router;
