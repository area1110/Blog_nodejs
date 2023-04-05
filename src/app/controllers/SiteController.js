class SiteController {
  /** [GET] / */
  index(req, res) {
    res.render("home");
  }

  /** [GET] /search */
  search(req, res) {
    res.render("search");
  }

  /** [POST] /search */
  searchPost(req, res) {
    res.render('search_result', {query: req.body.q})
  }
}

module.exports = new SiteController();
