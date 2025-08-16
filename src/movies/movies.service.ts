import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MovieDocument, Movies } from './movies.schema';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movies.name) private MoviesModel: Model<MovieDocument>) { }

    async getAllMovies(): Promise<Movies[]> {
        return this.MoviesModel.find().exec()
    }
}
