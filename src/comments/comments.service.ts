import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './comments.schema';
import { Model, Types } from 'mongoose';


@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private CommentsModel: Model<CommentDocument>) { }

    async getMovieComments(movie_id: string): Promise<Comment[]> {
        return await this.CommentsModel.find({ movie_id: new Types.ObjectId(movie_id) }).populate('movie_id')
    }
}
