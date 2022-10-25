
import { Router } from "express";
import categoriesController from "../controllers/categories.controller";

class CategoriesRoutes {

    router = Router();

    constructor() {
    
        this.initRoutes();
    
    }

    initRoutes() {

        this.router.get('/categories', categoriesController.getCategories);
        this.router.get('/categories/:id', categoriesController.getCategoryById);
        this.router.post('/categories', categoriesController.createCategory);
        this.router.patch('/categories/:id', categoriesController.updateCategory);
        this.router.delete('/categories/:id', categoriesController.deleteCategory);

    }

}

export default new CategoriesRoutes();
