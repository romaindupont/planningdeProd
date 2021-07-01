const settings_model = require('../models/settings_model');

const settingsController = {
  findAll: async (req, res) => {
    try {
      const settingsList = await settings_model.dataSettings.listSetting();
      return res.status(201).json({
        settingsList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      await settings_model.dataSettings.updateSettings(req.body, req.params.id);
      return res.status(201).json({
        message: "Les horaires sont mis à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = settingsController;
