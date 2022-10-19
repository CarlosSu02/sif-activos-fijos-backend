
// console.log('May te force be with you, always.');
// Leer https://sequelize.org/docs/v6/getting-started/

import App from './app';
import 'dotenv/config';

import './models/example.model';
import { Test } from './models/example.model';

// const PORT = process.env.APP_PORT || 3000;

// Lista los atributos de Test (tabla 'tests') definidos en Models 
console.log(Test.prototype);

App.listen(process.env.APP_PORT as unknown as number || 3500);
