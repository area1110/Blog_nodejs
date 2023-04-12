const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/add', courseController.addCourse);
router.post('/add', courseController.addCoursePost);

router.get('/', courseController.getCourses);

module.exports = router;