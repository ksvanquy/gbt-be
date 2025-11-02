import { IsString, IsOptional, IsEnum, IsMongoId, IsNumber } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    name: string;

    @IsEnum(['grade', 'subject', 'program', 'custom'])
    type: string;

    @IsOptional()
    @IsString()
    slug?: string;

    @IsOptional()
    @IsMongoId()
    parent?: string;

    @IsOptional()
    @IsNumber()
    order?: number;
}
