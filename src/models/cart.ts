import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import { CartItem } from './item';

export class Cart extends Model {
  declare id: number;
  declare total: number;
  declare items: CartItem[];
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    items: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'cart',
  },
);

Cart.hasMany(CartItem);
