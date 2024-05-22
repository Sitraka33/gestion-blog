const Article = require("../models/article");

exports.findAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findArticleById = async (req , res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article) {
          res.status(200).json(article);
        } else {
          res.status(404).json({ error: 'Article not found' });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

exports.createArticle = async ( req , res ) => {
    try {
        const newArticle = await Article.create(req.body);
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateArticle = async (req, res) => {
    try {
        const [updated] = await Article.update(req.body, {
          where: { IdArticle: req.params.id }
        });
        if (updated) {
          const updatedArticle = await Article.findByPk(req.params.id);
          res.status(200).json(updatedArticle);
        } else {
          res.status(404).json({ error: 'Article not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

exports.deleteArticle = async (req, res) => {
    try {
      const deleted = await Article.destroy({
        where: { IdArticle: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Article not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
