import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import { Coupon } from '.';

export class Rule extends Model {
  declare id: number;
  declare type: string;
  declare value: number;
}

Rule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM('cart_total_price', 'item_count'),
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    modelName: 'Rule',
  },
);

Rule.belongsToMany(Coupon, { through: 'CouponRules' });
Coupon.belongsToMany(Rule, {through:'CouponRules'})