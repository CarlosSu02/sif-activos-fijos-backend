
// console.log('May te force be with you, always.');
// Leer https://sequelize.org/docs/v6/getting-started/

import app from './app';
import 'dotenv/config';
import { sequelize } from './database/connect_db';

import './models/example.model';
import { Test } from './models/example.model';

const PORT = process.env.APP_PORT || 3000;

const main = async () => {

    try {

        // Mensaje que también se espera antes del console.log() 'Executing (default): SELECT 1+1 AS result';
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Lista los atributos de Test (tabla 'tests') definidos en Models 
        console.log(Test.prototype);

        app.listen(PORT, () => {

            console.log(`Server is running on port ${PORT}!`);

        });
        
    } catch (error) {
        
        console.error('Unable to connect to the database: ', error);

    }

};

main();
