import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movies & Document;

@Schema()
export class Imdb {
    @Prop(Number)
    rating: number;

    @Prop(Number)
    votes: number;

    @Prop(Number)
    id: number;
}

@Schema()
export class Awards {
    @Prop(Number)
    wins: number;

    @Prop(Number)
    nominations: number;

    @Prop(String)
    text: string;
}

@Schema()
export class TomatoesViewer {
    @Prop(Number)
    rating: number;

    @Prop(Number)
    numReviews: number;

    @Prop(Number)
    meter: number;
}

@Schema()
export class TomatoesCritic {
    @Prop(Number)
    rating: number;

    @Prop(Number)
    numReviews: number;

    @Prop(Number)
    meter: number;
}

@Schema()
export class Tomatoes {
    @Prop({ type: TomatoesViewer })
    viewer: TomatoesViewer;

    @Prop({ type: TomatoesCritic })
    critic: TomatoesCritic;

    @Prop(Date)
    dvd: Date;

    @Prop(String)
    consensus: string;

    @Prop(Number)
    fresh: number;

    @Prop(Number)
    rotten: number;

    @Prop(Date)
    lastUpdated: Date;
}

@Schema()
export class Movies {
    @Prop(String)
    title: string;

    @Prop(Number)
    year: number;

    @Prop(String)
    rated: string;

    @Prop(Number)
    runtime: number;

    @Prop([String])
    countries: string[];

    @Prop([String])
    genres: string[];

    @Prop(Date)
    released: Date;

    @Prop([String])
    directors: string[];

    @Prop([String])
    writers: string[];

    @Prop([String])
    cast: string[];

    @Prop(String)
    poster: string;

    @Prop(String)
    plot: string;

    @Prop(String)
    fullplot: string;

    @Prop(String)
    lastupdated: string;

    @Prop(String)
    type: string;

    @Prop({ type: Imdb })
    imdb: Imdb;

    @Prop({ type: Awards })
    awards: Awards;

    @Prop({ type: Tomatoes })
    tomatoes: Tomatoes;

    @Prop(Number)
    num_mflix_comments: number;
}

export const MoviesSchema = SchemaFactory.createForClass(Movies);
