
// Example to Connect db from PostgreSQL
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    process.env.PG_DATABASE || 'your_database',
    process.env.PG_USER || 'postgres',
    process.env.PG_PASSWORD || 'your_password', //siempre configurar .env, nunca usar estos valores para información sensible.
    {
        host: process.env.PG_HOST || 'localhost',
        dialect: 'postgres'
    }
);
