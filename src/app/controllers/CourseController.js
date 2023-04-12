const Course = require("../models/Course");
const courseRepository = require("../repositories/CourseRepo");

class CourseController {
  /** [GET] /course
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async getCourses(req, res) {
    let courses = await courseRepository.getCourses();
    res.render("course", { courses });
  }

  /** [GET] /couses/add
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async addCourse(req, res) {
    res.render("course_form");
  }

  /** [POST] /couses/add
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async addCoursePost(req, res) {
    let course = new Course();
    course.name = req.body.courseName;
    course.description = req.body.courseDescription;
    course.image = req.body.courseImage;

    console.log("course form:", course.name, course.description);
    try {
      await courseRepository.addCourse(course);
    } catch {
      res.send("Lỗi khi tạo Course");
    }
  }
}

module.exports = new CourseController();
