import { Body, Controller, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movies } from './movies.schema';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {

        @Post()
        async getAllMovies(): Promise < Movies[] > {
            return this.moviesService.getAllMovies()
        }
    }
}
