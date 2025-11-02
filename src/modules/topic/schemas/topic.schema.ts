import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Topic extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ type: [Types.ObjectId], ref: 'Category', default: [] })
  categories: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'Topic', default: null })
  parent?: Types.ObjectId;

  @Prop({ default: 0 })
  order?: number;

  @Prop()
  slug?: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);