const siteRouter = require("./site.route");
const newsRouter = require("./news.route");
const courseRouter = require("./course.route");

function route(app) {
  app.use("/course", courseRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
