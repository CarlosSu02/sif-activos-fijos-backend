
import { CreateCategoryDto } from "../dtos/create_category.dto";
import { Category } from "../models/category.model";
import { validate } from "class-validator";
import { plainToClass } from 'class-transformer';

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

        const searchCategories = await Category.findAndCountAll({ limit: size, offset: page * size, order: [['id', 'ASC']] });                                                             

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

    public validationCategory = async (object: any): Promise<CreateCategoryDto> => {

        // const createCategoryDto = new CreateCategory();
        // const { name, description } = object;
       
        const validatedCategory = plainToClass(CreateCategoryDto, object)

        // const validated = await validate(createCategory).then(errors => errors);

        // console.log(validated);

        const errors = await validate(validatedCategory).then(errors => {
            
            if (errors.length > 0) {

                let constraints: any = [];

                errors.forEach(err => {
                    constraints.push({ 
                        'Property ': err.property, 
                        'Errors ': err.constraints 
                    });
                    // Object.assign(constraints, err.constraints)
                    // constraints = err.constraints;
                });

                return constraints;

            }

        });

        // console.log(typeof validated);

        // console.log(Object.keys(validated!).length);

        if (typeof errors !== 'undefined') throw new Error(JSON.stringify(errors)); 
        
        // const info = JSON.stringify(validated);

        // console.log(validated?.toString());

        // console.log(JSON.parse(info!));

        return validatedCategory;

        // return (typeof validated !== 'undefined')
        //     ? JSON.stringify(validated)
        //     : { name, description };

    };

}

export default new CategoriesService();
