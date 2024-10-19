import express from 'express';
import database from './src/config/db';
import routes from './src/routes/index'; // Import the routes index

class Server {
    private app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT || '3000', 10);
        this.initializeMiddleware();
        this.connectDatabase();
        this.initializeRoutes();
    }

    private initializeMiddleware() {
        this.app.use(express.json());
    }

    private async connectDatabase() {
        await database.connect();
    }

    private initializeRoutes() {
        this.app.use('api', routes); // Use the indexed routes
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }
}

// Initialize and start the server
const server = new Server();
server.start();
