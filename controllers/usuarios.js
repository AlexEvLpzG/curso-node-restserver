const { response, request } = require( 'express' );

const usuariosGet = ( req = request, res = response ) => {
    const { q, nombre = 'No name', apikey, page = 1, limit = 5 } = req.query;

    res.json({
        msg: 'get API - Controller usuariosGet',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = ( req, res ) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - Controller usuariosPut',
        id
    });
}

const usuariosPost = ( req, res ) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controller usuariosPost',
        nombre,
        edad
    });
}

const usuariosDelete = ( req, res ) => {
    res.status(201).json({
        msg: 'delete API - Controller usuariosDelete'
    });
}

const usuariosPatch = ( req, res ) => {
    res.status(201).json({
        msg: 'patch API - Controller usuariosPatch'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}