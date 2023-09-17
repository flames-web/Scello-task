import {Router} from "express";
import { createCoupon , coupons} from "./controllers/coupon.controller";

const router = Router();


router.post('/coupon',createCoupon);

router.get('/coupon',coupons)

export default router;