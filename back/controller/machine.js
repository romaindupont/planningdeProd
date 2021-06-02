const machine_model = require('../models/machine_model');

const machineController = {
  findAll: async (req, res) => {
    try {
      const MachineList = await machine_model.dataMachine.MachineList();
      return res.status(201).json({
        MachineList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      await machine_model.dataMachine.updateMachine(req.body, req.params.id);
      return res.status(201).json({
        message: "La machine est mise à jour",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  delete: async(req,res) => {
    try {
      await machine_model.dataMachine.deleteMachine(req.params.id);
      return res.status(201).json({
        message: "La machine est supprimée"
      });

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const lastId = await machine_model.dataMachine.lastId();
      const newId = lastId.max+1;
      const newMachine = await machine_model.dataMachine.addMachine(req.body, newId);
      return res.status(201).json({
          message: "Nouvelle machine enregistrée",
          newMachine
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = machineController;
