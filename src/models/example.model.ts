
// Example Models
import { sequelize } from "../database/connect_db";
import { DataTypes, Model } from 'sequelize';

export const Test = sequelize.define(
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
