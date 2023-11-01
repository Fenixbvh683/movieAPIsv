const router = require('express').Router();
const {index, show} = require('../../controllers/apiGenresController');


/* '/api/vi/genres' */
router
    .get('/', index)
    .get('/:id', show)
    


module.exports = router;