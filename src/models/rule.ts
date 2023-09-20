import { DataTypes, Model, ForeignKey } from 'sequelize';
import sequelize from '../sequelize';
import { Coupon } from '.';

export class Rule extends Model {
  declare id: number;
  declare type: string;
  declare value: number;
  declare couponId: ForeignKey<Coupon['id']>;
}

Rule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('cart_total_price', 'item_count'),
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
    },
    couponId: {
      type: DataTypes.INTEGER,
      references: {
        model: Coupon,
        key: 'id',
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Rule',
  },
);
