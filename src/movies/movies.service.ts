import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MovieDocument, Movies } from './movies.schema';
import { Model } from 'mongoose';
import { GetMoviesDto } from './dto/get-movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movies.name) private MoviesModel: Model<MovieDocument>) { }

    async getAllMovies(dto: GetMoviesDto): Promise<{
        data: Movies[];
        total: number;
        page: number;
        limit: number;
    }> {
        const { page = 1, limit = 10, title, genre } = dto
        const skip = (page - 1) * limit

        const query: any = {}

        if (title) {
            query.title = { $regex: title, $options: 'i' }
        }

        if (genre) {
            query.genre = genre
        }

        const [data, total] = await Promise.all([
            this.MoviesModel.find(query).skip(skip).limit(limit).exec(),
            this.MoviesModel.countDocuments(query).exec(),
        ]);

        return { data, total, page, limit }
    }

    async getById(_id: string): Promise<Movies | null> {
        console.log(_id, " idddddddd")
        return await this.MoviesModel.findById(_id)
    }


}
