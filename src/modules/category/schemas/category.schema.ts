import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    enum: ['grade', 'subject', 'book', 'group', 'course', 'program', 'custom']
  })
  type: string;

  @Prop()
  slug?: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', default: null })
  parent?: Types.ObjectId;

  @Prop({ default: 0 })
  order?: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);