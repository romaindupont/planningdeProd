const planning_model = require('../models/planning_model');

const planningController = {
  add: async (req, res) => {
    try {
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
    try {
      await planning_model.dataPlanning.deletePlanning(req.params.id);
      return res.status(201).json({
        message: "Votre tâche est supprimée"
      });

    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      await planning_model.dataPlanning.updatePlanning(req.body,req.params.id);
      return res.status(201).json({
        message: "Votre tâche est mise à jour"
      });
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  },
};

module.exports = planningController;
