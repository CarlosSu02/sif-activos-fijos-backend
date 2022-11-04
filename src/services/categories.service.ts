
import { CreateCategory } from "../dtos/create_category.dto";
import { Category } from "../models/category.model";
import { validate } from "class-validator";

interface ICategory {
    name: string,
    description?: string
}

interface ICategoriesPagination {
    count: number,
    totalPages: number,
    results: Category[]
}

class CategoriesService {

    public getCategories = async (page: number, size: number): Promise<ICategoriesPagination> => {

        // console.log(page, size);

        /* const searchAllCategories = await Category.findAndCountAll({ attributes: ['id', 'name', 'description'], 
                                                             order: [['id', 'ASC']] }); */

        const searchCategories = await Category.findAndCountAll({ limit: size, offset: page * size });                                                             

        if (searchCategories.count === 0) throw new Error('There are no categories added!');
        
        return {
            count: searchCategories.count,
            totalPages: Math.ceil(searchCategories.count / size),
            results: searchCategories.rows
        };
        
    };

    public getCategoryById = async (id: number): Promise<Category> => {

        const searchCategory = await Category.findOne({ attributes: ['id', 'name', 'description'],
                                                        where: { id }});

        if (searchCategory === null) throw new Error('Category is not exists!');

        return searchCategory;

    };

    public validationCategory = async (object: any): Promise<ICategory> => {

        const createCategory = new CreateCategory();
        const { name, description } = object;
       
        createCategory.name = name;
        createCategory.description = description;

        // const validated = await validate(createCategory).then(errors => errors);

        // console.log(validated);

        const validated = await validate(createCategory).then(errors => {
            
            if (errors.length > 0) {

                let constraints: object | undefined;

                errors.forEach(err => {
                    constraints = err.constraints;
                });

                return constraints;

            }

        });

        // console.log(typeof validated);

        // console.log(Object.keys(validated!).length);

        if (typeof validated !== 'undefined') throw new Error(JSON.stringify(validated)); 
        
        // const info = JSON.stringify(validated);

        // console.log(validated?.toString());

        // console.log(JSON.parse(info!));

        return { name, description };

        // return (typeof validated !== 'undefined')
        //     ? JSON.stringify(validated)
        //     : { name, description };

    };

}

export default new CategoriesService();
