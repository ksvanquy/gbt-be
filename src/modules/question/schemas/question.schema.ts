import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Question extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'Topic', default: [] })
  topics: Types.ObjectId[];

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ enum: ['open', 'solved', 'closed'], default: 'open' })
  status: string;

  @Prop({ default: 0 })
  votes: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);