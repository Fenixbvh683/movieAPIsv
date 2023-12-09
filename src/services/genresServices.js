const {Op} = require('sequelize');
const db = require('../database/models');

const getAllGenres = async () =>{

    try {
        const genres = await db.Genre.findAll({

            order : [['name', 'ASC']]
            /*attributes : {
                exclude : ['created_at', 'updated_at']
            },*/
           /* include : [
                {
                    association : 'genre',
                    attributes : ['id', 'name']
                },
                {
                    association : 'actors',
                    attributes : ['id', 'first_name', 'last_name'],
                    through : {
                        attributes : []
                    }
                }
        ]*/
        });
        return genres
    } catch (error) {
        console.log(error);
        throw {
            status : 500,
            message : error.message
        }
    }

}
/*
const getGenreById = async (id) => {

    try {

        if(!id){
            throw {
                status : 400,
                message : 'ID inexistente'
            }
        }

        const genre = await db.Genre.findByPk(id,{
            attributes : {
                exclude : ['created_at', 'updated_at']
            },
            /*include : [
                {
                    association : 'genre',
                    attributes : ['id', 'name']
                },
                {
                    association : 'actors',
                    attributes : ['id', 'first_name', 'last_name'],
                    through : {
                        attributes : []
                    }
                }
        ]*/
      /*  });
        return genre
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message
        }
    }

}
*/
module.exports = {
    getAllGenres,
    //getGenreById
}