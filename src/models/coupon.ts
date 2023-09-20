import { Model, DataTypes, HasManyCreateAssociationMixin } from 'sequelize';
import sequelize from '../sequelize';
import { Rule } from './rule';
import { Discount } from './discount';

export class Coupon extends Model {
  declare id: number;
  declare name: string;
  declare code: string;
  declare createRule: HasManyCreateAssociationMixin<Rule, 'couponId'>;
  declare createDiscount: HasManyCreateAssociationMixin<Discount, 'couponId'>;
}

Coupon.init(
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
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'coupon',
  },
);

Coupon.hasMany(Rule, {
  sourceKey: 'id',
  foreignKey: 'couponId',
  as: 'rules',
});
Coupon.hasMany(Discount, {
  sourceKey: 'id',
  foreignKey: 'couponId',
  as: 'discounts',
});
