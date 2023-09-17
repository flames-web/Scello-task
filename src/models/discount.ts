import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import { Coupon } from '.';

export class Discount extends Model {
  declare id: number;
  declare type: string;
  declare value: number;
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
  },
  {
    sequelize,
    modelName: 'Discount',
    tableName: 'discount',
  },
);

Discount.belongsToMany(Coupon, { through: 'CouponDiscount' });
Coupon.belongsToMany(Discount,{through:'CouponDiscount'})
