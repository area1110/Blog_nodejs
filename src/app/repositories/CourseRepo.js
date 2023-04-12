const TYPES = require("tedious").TYPES;
const dbContext = require("./DBContext");
const Course = require("../models/Course");
const InputParam = require("./InputParam");

class CourseRepo {
  /**
   *
   * @returns {Promise<Course[]>}
   */
  async getCourses() {
    const sql = "SELECT * FROM [courses]";
    const outParams = [];
    // outParams.push({ name: 'id', type: TYPES.Int });
    // outParams.push({ name: 'name', type: TYPES.VarChar });
    let courseArray = await dbContext.execSql(sql, null, outParams);
    return courseArray;
  }

  /**
   * @param {Course} courseIn
   */
  async addCourse(courseIn) {
    const sql =
      "INSERT INTO [course] (name, description, image) VALUES (@name, @description, @image)";

    /**
     * @param {InputParam[]} params
     */
    let params = [];
    params.push(new InputParam("name", TYPES.VarChar, courseIn.name));
    params.push(new InputParam("description", TYPES.VarChar, courseIn.description));
    params.push(new InputParam("image", TYPES.VarChar, courseIn.image));
    await dbContext.execSql(sql, params, null);
    
  }
}

module.exports = new CourseRepo();
