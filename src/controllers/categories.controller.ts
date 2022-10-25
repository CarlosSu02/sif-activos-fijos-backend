
import { Request, Response } from "express";
import { Category } from "../models/category.model";

class CategoriesController {

    getCategories = async (req: Request, res: Response) => {

        try {

            const searchAllCategories = await Category.findAll({ attributes: ['id', 'name', 'description'], order: [['id', 'ASC']] });

            (searchAllCategories.length !== 0) ? res.status(200).json(searchAllCategories) : res.status(404).json('There are no categories added!');
            
        } catch (error) {
            
            (error instanceof Error) ? res.send(500).send(error.message) : res.status(500).send(String(error));

        }

    };

    getCategoryById = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            const category = await Category.findOne({ attributes: ['name', 'description'],
                                                      where: { id }});

            (category !== null) ? res.status(200).json(category) : res.status(404).json('Category is not exists!');

        } catch (error) { 

            (error instanceof Error) ? res.send(500).send(error.message) : res.status(500).send(String(error));

        }

    };

    createCategory = async (req: Request, res: Response) => {

        try {

            const { name, description } = req.body;

            if(name === '' || typeof name !== 'string') throw new Error('Name is not valid!');

            const newCategory = await Category.create({
                name,
                description
            });

            console.log('?', newCategory);

            res.status(201).json(newCategory);
            
        } catch (error) {

            (error instanceof Error) ? res.status(400).send(error.message) : res.status(400).send(String(error));
            
        }

    };

    updateCategory = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            const category = await Category.findOne({ attributes: ['id', 'name', 'description'], 
                                                      where: { id } });

            if(!category) throw new Error('Id is not exists!');
            // if(name === '' || typeof name !== 'string') throw new Error('Name is not valid!');

            category.set(req.body);
            await category.save();

            res.status(202).json(category);
            
        } catch (error) {

            (error instanceof Error) ? res.status(400).send(error.message) : res.status(400).send(String(error));
            
        }

    };

    deleteCategory = async (req: Request, res: Response) => {

        try {

            const { id } = req.params;

            const existsCategory = await Category.findByPk(id);

            if(!existsCategory) throw new Error('Category is not exists!');

            await Category.destroy({ where: { id } });

            res.status(200).send(`The category ${existsCategory.name} (${id}) deleted successfully!`)
            
        } catch (error) {
            
            (error instanceof Error) ? res.status(400).send(error.message) : res.status(400).send(String(error));

        }

    };

}

export default new CategoriesController();
