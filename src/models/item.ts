import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import { Cart } from './cart';

export class CartItem extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'cartItem',
  },
);

// CartItem.belongsTo(Cart);
