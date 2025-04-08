const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudents);
router.post('/', controller.addStudent);
router.get('/:id', controller.getStudentById);
router.put('/:id', controller.updateStudentById);
router.delete('/:id', controller.removeStudentById);

module.exports = router;