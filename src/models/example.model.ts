
// Example Models
import Connection from "../database/connection";
import { DataTypes, Model } from 'sequelize';

// const connection: Connection = new Connection();

export const Test = new Connection().connection.define(
    'tests',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        test: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

// Si hay relacion con otra tabla
/* 

Test.hasMany(RelacionTabla, {
    foreignKey: 'relacionId',
    sourceKey: 'id'
});

RelacionTabla.belongsTo(Test, {
    foreignKey: 'relacionId',
    targetKey: 'id'
});

*/
