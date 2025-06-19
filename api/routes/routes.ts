import { Router } from "express";
import productController from "../controllers/productController";

const router = Router();

router.get("/search/:query", productController.getSearch);
router.get("/product/:id", productController.getOne)

export default router;