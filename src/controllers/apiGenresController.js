const { getAllGenres, getGenreById } = require("../services/genresServices")

module.exports = {
    index : async (req, res) => {
        try {
            const genres = await getAllGenres();

            return res.status(200).json({
                ok : true,
                data : genres
            })

        } catch (error) {
            console.log(error)
            return res.status(errors.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'upss, Error'
            })
        }
        
        
    },
    show : async (req,res) => {
        try {
            const genre = await getGenreById(req.params.id);
            return res.status(200).json({
                ok : true,
                data : genre
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'upss, Error'
            })
        }
    },
    store : (req,res) => {

    },
    update : (req,res) => {

    },
    delete : (req,res) => {

    }
}