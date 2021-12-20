const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        const moviesPromise = db.Movies.findAll()
        .then((moviesPromise) => {
            res.render('moviesList', {
                movies: moviesPromise
            })
        } )
    },
    detail: (req, res) => {
        const id = +req.params.id;
        const moviePromise = db.Movies.findByPk(id)
        .then((moviePromise) => {
            res.render('moviesDetail', {
                movie: moviePromise
            })
        })
    },
    new: (req, res) => {
        const moviesPromise = db.Movies.findAll({
            order:[ ['release_date', 'DESC']]
        })
        .then((moviesPromise) => {
            res.render('newestMovies', {
                movies: moviesPromise
            })
        })
    },
    recomended: (req, res) => {
        const moviesPromise = db.Movies.findAll({
            order:[ ['rating', 'DESC']]
        })
        .then((moviesPromise) => {
            res.render('recommendedMovies', {
                movies: moviesPromise
            })
        })
    }
}