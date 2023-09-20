import { Router } from 'express';
import {
  createCoupon,
  coupons,
  deleteCoupon,
} from './controllers/coupon.controller';

const router = Router();

router.post('/coupon', createCoupon);

router.get('/coupon', coupons);

router.delete('/coupon', deleteCoupon);

export default router;
