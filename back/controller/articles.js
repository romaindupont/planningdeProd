const articles_model = require('../models/articles_model');

const articlesController = {
  add: async (req, res) => {
    try {
      //console.log(req.body)
      const id = await articles_model.dataArticles.lastId();
      const newId = id.max+1;
      await articles_model.dataArticles.addArticles(newId,req.body);
      return res.status(201).json({
          logging: true,
          message: "Votre article est enregistrée"
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
      const findId = await articles_model.dataArticles.getArticles(req.body);
      console.log(findId)
      await articles_model.dataArticles.deleteArticles(findId);
      return res.status(201).json({
        message: "Votre article est supprimé"
      });

    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }

  },
  update: async(req,res) => {},
};

module.exports = articlesController;
