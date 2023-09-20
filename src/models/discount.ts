import { Model, DataTypes, ForeignKey } from 'sequelize';
import sequelize from '../sequelize';
import { Coupon, Rule } from '.';

export class Discount extends Model {
  declare id: number;
  declare type: string;
  declare value: number;
  declare couponId: ForeignKey<Coupon['id']>;
}

Discount.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('fixed_amount', 'percent_off', 'maximum_discount'),
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
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
    modelName: 'Discount',
    tableName: 'discount',
  },
);
