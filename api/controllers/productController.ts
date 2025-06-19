import { Request, Response } from "express";
import ProductModel from "../models/productModel";

class ProductController {
    async getSearch(req: Request, res: Response) {
        try {
            const { query } = req.params;
            const data = await ProductModel.getSearch(query);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = await ProductModel.getOne(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }
}

export default new ProductController();