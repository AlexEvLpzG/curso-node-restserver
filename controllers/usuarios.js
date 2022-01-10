const { response } = require( 'express' );

const usuariosGet = ( req, res = response ) => {
    res.json({
        msg: 'get API - Controller usuariosGet'
    });
}

const usuariosPut = ( req, res ) => {
    res.json({
        msg: 'put API - Controller usuariosPut'
    });
}

const usuariosPost = ( req, res ) => {
    res.status(201).json({
        msg: 'post API - Controller usuariosPost'
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