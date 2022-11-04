
import { Length, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategory {

    @Length(3, 50)
    @IsNotEmpty()
    @IsString()
    name?: string;
    
    @Length(10, 250)
    @IsOptional() 
    description?: string;

}
