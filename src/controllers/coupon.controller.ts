import { Json } from 'sequelize/types/utils';
import { Coupon, Discount, Rule } from '../models';
import { CouponService, RuleService } from '../services';
import { Request, Response } from 'express';

const couponService = new CouponService();
const ruleService = new RuleService();
export const createCoupon = async (req: Request, res: Response) => {
  try {
    const discounts = [
      {
        type: 'fixed_amount',
        value: 10,
      },
      {
        type: 'fixed_amount',
        value: 15,
      },
    ];
    const rules = [
      {
        type: 'cart_total_price',
        value: 2,
      },
    ];

    const newCoupon = await Coupon.create({
      name: 'fied',
      code: 'FIXED13',
    });

    if (newCoupon) {
      for (let rule of rules) {
        newCoupon.createRule(rule);
      }

      for (let discount of discounts) {
        newCoupon.createDiscount(discount);
      }
    }

    const coupon = await Coupon.findByPk(newCoupon.id, {
      include: [Coupon.associations.rules, Coupon.associations.discounts],
    });

    return res.status(200).send({ coupon: coupon });
  } catch (e: any) {
    return res.status(500).send({ message: e.message, stack: e.stack });
  }
};

export const deleteCoupon = async (req: Request, res: Response) => {
  try {
    const deleteCount = await Coupon.destroy({
      where: {},
    });

    await Discount.destroy({
      where: {},
    });
    await Rule.destroy({
      where: {},
    });
    return res.status(200).send({ result: `Deleted ${deleteCount} coupons` });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

export const updateCoupon = async (req: Request, res: Response) => {};

export const coupons = async (req: Request, res: Response) => {
  const coupon = await Coupon.findByPk(99, {
    include: [Coupon.associations.discounts],
    rejectOnEmpty: true,
  });
  return res.status(200).send({ coupons: coupon });
};

export const discount = async (req: Request, res: Response) => {
  const { type, value } = req.body;
  const discount = await Discount.create({
    type,
    value,
  });
};
