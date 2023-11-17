import { IsNumber, IsOptional, IsString } from "class-validator";

export class DepartamentDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string; 

    @IsString()
    description: string;

    @IsString()
    location: string;
}