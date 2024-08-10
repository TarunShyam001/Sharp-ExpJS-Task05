exports.get404Error = (req, res, next) => {
    res.status(404).render('404', {
        path: req.path,
        pageTitle: 'Page Not Found' 
    });
};