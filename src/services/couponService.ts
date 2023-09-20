import { Coupon, Cart, CartItem, Discount, Rule } from '../models';

export class CouponService {
  async getCoupon(code: string) {
    return await Coupon.findOne({ where: { code: code } });
  }

  async newCoupon(code: string, name: string) {
    return await Coupon.create({ name, code });
  }

  async calculateDiscount(cartTotal: number, discounts: Discount[]) {}
}
