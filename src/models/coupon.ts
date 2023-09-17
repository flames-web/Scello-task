import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import { Rule } from './rule';
import { Discount } from './discount';

export class Coupon extends Model {
  declare id: number;
  declare name: string;
  declare code: string;
  // declare rulesIds: string[];
  // declare discountIds:string[]
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
    // rulesIds: {
    //   type:DataTypes.STRING,
      // references:'Rule'
    // },
    // discountIds: {
    //   type:DataTypes.STRING,
      // references:'Discount'
  //   }

  // 
},
  {
    sequelize,
    modelName: 'coupon',
  },
);

// Coupon.belongsToMany(Rule, { through: 'CouponRules' });
// Coupon.belongsToMany(Discount, { through: 'CouponDiscount' })
