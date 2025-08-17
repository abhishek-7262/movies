import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type CommentDocument = Comment & Document;

@Schema({ timestamps: false, collection: 'comments' })
export class Comment {
    @Prop({ required: true })
    name: string;

    @Prop({ type: Types.ObjectId, ref: 'Movies', required: true })
    movie_id: Types.ObjectId;

    @Prop({ required: true })
    text: string;

    @Prop({ type: Date, default: Date.now })
    date: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment)