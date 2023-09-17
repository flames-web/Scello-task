import { Coupon } from '../models';
import { CouponService, RuleService } from '../services';
import { Request, Response } from 'express';

const couponService = new CouponService();
const ruleService = new RuleService();
export const createCoupon = async (req: Request, res: Response) => {
  try {
    const { name, code, rulesIds, discountIds } = req.body;   
    const coupon = await couponService.newCoupon(code,name,rulesIds,discountIds)
      return res.status(200).send({coupon:coupon})
  } catch (e : any) {
    return res.status(500).send({message:e.message,stack:e.stack })
  }
};

export const coupons = async (req:Request,res:Response) => {
  const coupons = await Coupon.findAll({});
  return res.status(200).send({coupons:coupons})
}
