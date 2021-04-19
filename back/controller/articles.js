const articles_model = require('../models/articles_model');

const articlesController = {
  add: async (req, res) => {
    try {
      const id = await articles_model.dataArticles.lastId();
      const newId = id.max+1;
      const newArticle = await articles_model.dataArticles.addArticles(newId,req.body);
      return res.status(201).json({
          logging: true,
          message: "Votre article est enregistrée",
          newArticle
      });
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const articlesList = await articles_model.dataArticles.articlesList();
      return res.status(201).json({
        articlesList
      });
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  },
  delete: async(req,res) => {
    try {
      await articles_model.dataArticles.deleteArticles(req.params.id);
      return res.status(201).json({
        message: "Votre article est supprimé"
      });

    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }

  },
  update: async(req,res) => {
    try {
      await articles_model.dataArticles.updateArticles(req.body,req.params.id);
      return res.status(201).json({
        message: "Votre article est mis à jour"
      });
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  },
};

module.exports = articlesController;
