import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const newCat = new this.categoryModel(dto);
    return newCat.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id);

    if (!category) throw new NotFoundException('Category not found');

    return category;
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    const updated = await this.categoryModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    if (!updated) throw new NotFoundException('Category not found');

    return updated;
  }

  async remove(id: string): Promise<void> {
    const deleted = await this.categoryModel.findByIdAndDelete(id);

    if (!deleted) throw new NotFoundException('Category not found');
  }
}
