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
      console.log(error);
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
      console.log(error);
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
      console.log(error);
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
      console.log(error);
      res.status(500).send(error);
    }
  },
  updateStartDate: async(req,res) => {
    try {
      await planning_model.dataPlanning.updateStartDate(req.body,req.params.id);
      return res.status(201).json({
        message: "Date est mise à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  updateEndDate: async(req,res) => {
    try {
      await planning_model.dataPlanning.updateEndDate(req.body,req.params.id);
      return res.status(201).json({
        message: "Date est mise à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  updateQuantity: async(req,res) => {
    try {
      await planning_model.dataPlanning.updateQuantity(req.body,req.params.id);
      return res.status(201).json({
        message: "Quantité mise à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  find: async (req, res) => {
    try {
      const planningMachineList = await planning_model.dataPlanning.planningSpecialMachine();
      return res.status(201).json({
        planningMachineList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};

module.exports = planningController;
