import { IsNumber, IsOptional, IsString } from "class-validator";

export class AbilityDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string; 

    @IsString()
    experience_level: string;

    @IsString()
    description: string;

    @IsString()
    certifications: string;
}