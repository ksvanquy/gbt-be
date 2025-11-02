import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Answer extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Question', required: true })
  question: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop({ required: true })
  content: string;

  @Prop({ default: false })
  isBest: boolean;

  @Prop({ default: 0 })
  votes: number;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);