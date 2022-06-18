var express = require('express')
var router = express.Router()

const userController = require('../controllers').user;
const divisiController = require('../controllers').divisi;
const projectController = require('../controllers').project;
const projectDivisiController = require('../controllers').projectdivisi;

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Company' });
//   });

/* User Router */
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

/* Divisi Router */
router.get('/api/divisi', divisiController.list);
router.get('/api/divisi/:id', divisiController.getById);
router.post('/api/divisi', divisiController.add);
router.put('/api/divisi/:id', divisiController.update);
router.delete('/api/divisi/:id', divisiController.delete);

/* Project Router */
router.get('/api/project', projectController.list);
router.get('/api/project/:id', projectController.getById);
router.post('/api/project', projectController.add);
router.put('/api/project/:id', projectController.update);
router.delete('/api/project/:id', projectController.delete);

/* ProjectDivisi Router */
router.get('/api/projectdivisi', projectDivisiController.list);
router.get('/api/projectdivisi/:id', projectDivisiController.getById);
router.post('/api/projectdivisi', projectDivisiController.add);
router.put('/api/projectdivisi/:id', projectDivisiController.update);
router.delete('/api/projectdivisi/:id', projectDivisiController.delete);

module.exports = router;