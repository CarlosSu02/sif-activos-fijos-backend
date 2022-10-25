
import express, { json } from 'express';
import cors from 'cors';
import routesExamples from './routes/example.routes';
// import { json } from 'sequelize';

import Connection from './database/connection';
import categoriesRoutes from './routes/categories.routes';

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use(routes);

class App {

    public express: express.Application;
    private connection: Connection | undefined;

    constructor() {
        
        this.express = express();
        this.middlewares();

        this.db();
        this.routes();

    }

    middlewares() {

        this.express.use(json());
        this.express.use(cors());

    }

    db() {
        
        this.connection = new Connection();

        this.connection.connection.sync({ force: false })
            .then(() => {
        
                console.log('Connection has been established successfully.')
            
            })
            .catch((error) => {

                console.error('Unable to connect to the database: ', error);
            
            });

    }

    routes() {

        this.express.use(routesExamples);
        this.express.use('/api', categoriesRoutes.router);

    }

    listen(PORT: number) {

        this.express.listen(PORT, () => console.log(`Server is running on port ${PORT}! \nUrl: http://localhost:${PORT} \n`));

    };

}

export default new App;
