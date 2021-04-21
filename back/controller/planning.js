const planning_model = require('../models/planning_model');

const planningController = {
  add: async (req, res) => {
    try {
      console.log(req.body)
      const newPlanning = await planning_model.dataPlanning.addPlanning(req.body);
      return res.status(201).json({
          logging: true,
          message: "Nouvelle ligne de planning enregistrée",
          newPlanning
      });
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const planningList = await planning_model.dataPlanning.planningList();
      return res.status(201).json({
        planningList
      });
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  },
  delete: async(req,res) => {
    /* try {
      await articles_model.dataArticles.deleteArticles(req.params.id);
      return res.status(201).json({
        message: "Votre article est supprimé"
      });

    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    } */

  },
  update: async(req,res) => {
   /*  try {
      await articles_model.dataArticles.updateArticles(req.body,req.params.id);
      return res.status(201).json({
        message: "Votre article est mis à jour"
      });
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }*/
  },
};

module.exports = planningController;
