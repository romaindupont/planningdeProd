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
 /*  update: async(req,res) => {
    try {
      await workingDay_model.dataWorkingDay.updateWorkingDay(req.body);
      return res.status(201).json({
        message: "Les horaires sont mis à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }, */
};

module.exports = machineController;
