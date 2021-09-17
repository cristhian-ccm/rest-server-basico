const { request, response } = require('express');

const usersGet = (req = request, res = response ) => {

    const { nombre, apellido, page = 1, limit } = req.query;

    res.json({
        msg: "Petición GET a API - Controller",
        nombre,
        apellido,
        page,
        limit
    });
};

const usersPut = (req, res) => {

    const { id } = req.params;

    res.status(500).json({
        msg: "Petición PUT a API - Controller",
        id
    });
};

const usersPost = (req, res) => {

    const { nombre, edad } = req.body;
    
    res.json({
        msg: "Petición POST a API - Controller",
        nombre, 
        edad
    });
};

const usersDelete = (req, res) => {
    res.json({
        msg: "Petición DELETE a API - Controller"
    });
};

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}