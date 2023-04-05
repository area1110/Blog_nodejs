class NewsController {

    /** [GET] /news */
    index(req, res){
        res.render('news');
    }

    /** [GET] /news/:slug */
    detail(req, res){
        res.send('NEW DETAILS!!!');
    }
}

module.exports = new NewsController;