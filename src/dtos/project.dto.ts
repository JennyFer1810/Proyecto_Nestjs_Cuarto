import { IsNumber, IsOptional, IsString } from "class-validator";

export class ProjectDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string; 

    @IsString()
    start_date: string;

    @IsString()
    final_date: string;

    @IsString()
    description: string;

    @IsString()
    assigned_employee: string;
}