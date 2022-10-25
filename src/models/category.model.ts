
import { Column, Model, Table, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'categories',
    timestamps: false
})
export class Category extends Model {
    
    @Column({ 
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    public id?: number;

    @Column({ 
        type: DataType.STRING(50),
        allowNull: false,
        unique: true
    })
    public name?: string;
    
    @Column({ 
        type: DataType.STRING(150)
    })
    public description?: string;

};
