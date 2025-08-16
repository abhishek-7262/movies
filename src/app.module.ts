import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { TheatersModule } from './theaters/theaters.module';
import { EmbeddedMoviesModule } from './embedded_movies/embedded_movies.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGODB_URI,
        connectionFactory: (connection) => {
          connection.on('connected', () => {
            console.log('connected to db')
          });

          return connection;
        }
      })

    }),


    MoviesModule, CommentsModule, UsersModule, SessionsModule, TheatersModule, EmbeddedMoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
