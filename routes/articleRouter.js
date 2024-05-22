const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController.js')

router.get('/articles' , articleController.findAllArticles);
router.post('/article' , articleController.createArticle);
router.get('/article/:id' , articleController.findArticleById);
router.put('/article/:id' , articleController.updateArticle);
router.delete('/article/:id' , articleController.deleteArticle);

module.exports = router;