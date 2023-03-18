const Server = require('http');

const config = {
    server: { host: 'localhost', port: 8081 },
    routing: { magic: false },
    templating: {
        validation: true, allowedExtensions: ['hbs']
    },
    sessions: { active: true },
    database: {
        fileData: { active: true }
    }
}

const app = Server.createServer(config);
app.start();