import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movies } from './movies.schema';
import { GetMoviesDto } from './dto/get-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Post()
    async getAllMovies(@Body() dto: GetMoviesDto) {
        return this.moviesService.getAllMovies(dto)
    }

    @Get(':id')
    async getById(@Param('id') id: string) {

        return this.moviesService.getById(id)
    }
}
