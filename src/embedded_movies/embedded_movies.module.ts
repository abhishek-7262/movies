import { Module } from '@nestjs/common';
import { EmbeddedMoviesController } from './embedded_movies.controller';
import { EmbeddedMoviesService } from './embedded_movies.service';

@Module({
  controllers: [EmbeddedMoviesController],
  providers: [EmbeddedMoviesService]
})
export class EmbeddedMoviesModule {}
