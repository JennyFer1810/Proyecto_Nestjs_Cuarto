import { IsNumber, IsOptional, IsString } from "class-validator";

export class EmployeeDataDto {
    @IsNumber()
    id: number;

    @IsString()
    fullname: string; 

    @IsString()
    birth_date: string;

    @IsString()
    civil_status: string;

    @IsString()
    nationality: number;

    @IsString()
    gender: number;
}