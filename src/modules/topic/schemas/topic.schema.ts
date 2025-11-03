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

   @Prop({
    enum: [
      'chapter',
      'lesson',
      'section',
      'subsection',
      'video',
      'article',
      'exercise-group',
      'unit',
      'custom'
    ],
    default: 'chapter'
  })
  type: string;

    // Nội dung chính (HTML / Markdown / JSON)
  @Prop()
  content?: string;

  // Dữ liệu mở rộng (file, thời lượng video, pdf, hình ảnh,...)
  @Prop({ type: Object, default: {} })
  meta?: Record<string, any>;

  @Prop()
  slug?: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);

// Index giúp load nhanh cây nội dung theo Category & Parent
TopicSchema.index({ categories: 1 });
TopicSchema.index({ parent: 1 });
TopicSchema.index({ type: 1 });
TopicSchema.index({ slug: 1 });
TopicSchema.index({ categories: 1, parent: 1, order: 1 });