
import { Request, Response } from "express";
import { Category } from "../models/category.model";
import categoriesService from "../services/categories.service";

class CategoriesController {

    public getCategories = async (req: Request, res: Response): Promise<Response> => {

        try {
            
            const pageFromReq: number = +req.query.page! - 1;
            const size: number = 10;

            let page: number = 0;
            if (!Number.isNaN(pageFromReq) && pageFromReq > 0) page = pageFromReq;

            const categories = await categoriesService.getCategories(page, size);

            return res.status(200).json(categories);
            
        } catch (error) {
            
            return (error instanceof Error) ? res.status(404).send(error.message) : res.status(404).send(String(error));

        }

    };

    public getCategoryById = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            const category = await categoriesService.getCategoryById(+id);

            res.status(200).json(category);

        } catch (error) { 

            (error instanceof Error) ? res.status(404).send(error.message) : res.status(404).send(String(error));

        }

    };

    public createCategory = async (req: Request, res: Response) => {

        try {

            const category = await categoriesService.validationCategory(req.body);

            // if (typeof category === 'string') throw new Error(category);

            const newCategory = await Category.create({
                name: category.name,
                description: category.description
            });

            // console.log('?', newCategory);

            res.status(201).json(newCategory);
            
        } catch (error) {

            (error instanceof Error) ? res.status(400).send(error.message) : res.status(400).send(String(error));
            
        }

    };

    public updateCategory = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            const category = await categoriesService.getCategoryById(+id);

            // if(!category) throw new Error('Id is not exists!');
            // if(name === '' || typeof name !== 'string') throw new Error('Name is not valid!');

            const validationCategory = await categoriesService.validationCategory(req.body);

            // if (typeof validationCategory === 'string') throw new Error(validationCategory);

            category.set(validationCategory);
            await category.save();

            res.status(202).json(category);
            
        } catch (error) {

            (error instanceof Error) ? res.status(400).send(error.message) : res.status(400).send(String(error));
            
        }

    };

    public deleteCategory = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            const existsCategory = await categoriesService.getCategoryById(+id);

            // if(!existsCategory) throw new Error('Category is not exists!');

            await Category.destroy({ where: { id } });

            res.status(200).send(`The category ${existsCategory.name} (${id}) deleted successfully!`)
            
        } catch (error) {
            
            (error instanceof Error) ? res.status(400).send(error.message) : res.status(400).send(String(error));

        }

    };

}

export default new CategoriesController();
