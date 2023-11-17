import { IsNumber, IsOptional, IsString } from "class-validator";

export class HomeworkDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string; 

    @IsString()
    homework_status: string;

    @IsString()
    description: string;

    @IsString()
    assigned_employee: string;
}