const workingDay_model = require('../models/workingDay_model');

const workingDayController = {
  findAll: async (req, res) => {
    try {
      const WorkingDayList = await workingDay_model.dataWorkingDay.workingDayList();
      return res.status(201).json({
        WorkingDayList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      await workingDay_model.dataWorkingDay.updateWorkingDay(req.body);
      return res.status(201).json({
        message: "Les horaires sont mis à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};

module.exports = workingDayController;
