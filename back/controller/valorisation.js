const valorisation_model = require('../models/valorisation_model');

const valorisationController = {
  findAll: async (req, res) => {
    try {
      const valorisationList = await valorisation_model.dataValorisation.listValorisation();
      return res.status(201).json({
        valorisationList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      const updateLine = await valorisation_model.dataValorisation.updateValorisation(req.params.id, req.body);
      return res.status(201).json({
        message: "Votre tâche est mise à jour",
        updateLine
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      await valorisation_model.dataValorisation.deleteValorisation(req.params.id);
      return res.status(201).json({
        message: "La ligne est supprimée"
      });

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
    add: async (req, res) => {
      try {
        const lastId = await valorisation_model.dataValorisation.lastId();
        const newId = lastId.max+1;
        const newLine = await valorisation_model.dataValorisation.addValorisation(req.body, newId);
        return res.status(201).json({
            logging: true,
            message: "Nouvelle ligne enregistrée",
            newLine
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    },

};

module.exports = valorisationController;
