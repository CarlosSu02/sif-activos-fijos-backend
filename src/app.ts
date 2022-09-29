
import express from 'express';
import cors from 'cors';
import routes from './routes/example.routes';
import { json } from 'sequelize';

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use(routes);

class App {

    public express: express.Application;

    constructor() {
        
        this.express = express();

        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(routes);
        
    }

    listen(PORT: number) {

        this.express.listen(PORT, () => console.log(`Server is running on port ${PORT}! \nUrl: http://localhost:${PORT}`));

    };

}

export default new App;
