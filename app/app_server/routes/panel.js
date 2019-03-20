var express = require('express');
var router = express.Router();
var ctrlPanel = require('../controllers/panelController');

/* GET Panel listing. */
router.get('/', ctrlPanel.home);
router.get('/panelAlaSol', ctrlPanel.alaSol);
router.get('/panelAlaMar', ctrlPanel.alaMar);
router.get('/panelVilaNova', ctrlPanel.vilaNova);
router.get('/panelAlaTerra', ctrlPanel.alaTerra);
router.get('/panelSauipePremium', ctrlPanel.sauipePremium);
router.get('/panelAlaAgua', ctrlPanel.alaAgua);
router.get('/panelCentroNautico', ctrlPanel.centroNautico);

module.exports = router;
