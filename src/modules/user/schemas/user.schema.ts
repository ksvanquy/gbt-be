import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserRole = 'student' | 'teacher' | 'admin';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: ['student', 'teacher', 'admin'], default: 'student' })
  role: UserRole;

  @Prop()
  avatar?: string;

  @Prop({ default: 0 })
  points?: number;

  @Prop({ default: 1 })
  level?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);