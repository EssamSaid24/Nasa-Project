const http = require('http')
const app = require('./app')
const {loadPlanetsDate} = require('./models/planets.model')
const PORT = 8000;

const server = http.createServer(app)


async function StartServer (){
        await loadPlanetsDate();
        server.listen(PORT,() => {
        console.log(`Listening on port ${PORT}`)
});
}
StartServer()