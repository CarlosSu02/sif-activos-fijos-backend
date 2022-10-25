
// Example to Connect db from PostgreSQL
import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';
import { Category } from '../models/category.model';

// console.log(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, process.env.PG_HOST);

class Connection {

    public connection: Sequelize;

    constructor() {

        this.connection = new Sequelize({
            database: process.env.PG_DATABASE,
            username: process.env.PG_USER,
            password: process.env.PG_PASSWORD, 
            host: process.env.PG_HOST,
            dialect: 'postgres',
            logging: false,
            models: [
                Category
            ]
        });

    }

}

export default Connection;
