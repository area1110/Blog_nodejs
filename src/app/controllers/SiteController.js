const { response } = require("express");

class SiteController {
  /** [GET] / */
  index(req, res) {
    res.render("home");
  }

  /** [GET] /search */
  search(req, res) {
    res.render("search");
  }

  searchPost(req, res) {
    console.log(req.body.q);
    res.render('search_result', {query: req.body.q})
  }
}

module.exports = new SiteController();
