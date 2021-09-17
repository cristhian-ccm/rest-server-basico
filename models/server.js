const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares: funciones que añaden funcionalidad a un webserver
        this.middlewares();

        // Rutas de la app
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y Parseo del body
        this.app.use( express.json() );

        // Directorio public
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port);
        });
    }
}

module.exports = Server;