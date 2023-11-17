import { IsNumber, IsOptional, IsString } from "class-validator";

export class EmployeeDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string; 

    @IsString()
    address: string;

    @IsString()
    email: string;

    @IsNumber()
    phone: number;
}