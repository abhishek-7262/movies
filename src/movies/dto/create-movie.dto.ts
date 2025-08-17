import {
    IsArray,
    IsDate,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ImdbDto {
    @IsNumber()
    rating: number;

    @IsNumber()
    votes: number;

    @IsNumber()
    id: number;
}

class AwardsDto {
    @IsNumber()
    wins: number;

    @IsNumber()
    nominations: number;

    @IsString()
    text: string;
}

class TomatoesViewerDto {
    @IsNumber()
    rating: number;

    @IsNumber()
    numReviews: number;

    @IsNumber()
    meter: number;
}

class TomatoesCriticDto {
    @IsNumber()
    rating: number;

    @IsNumber()
    numReviews: number;

    @IsNumber()
    meter: number;
}

class TomatoesDto {
    @ValidateNested()
    @Type(() => TomatoesViewerDto)
    viewer: TomatoesViewerDto;

    @ValidateNested()
    @Type(() => TomatoesCriticDto)
    critic: TomatoesCriticDto;

    @IsDate()
    dvd: Date;

    @IsString()
    consensus: string;

    @IsNumber()
    fresh: number;

    @IsNumber()
    rotten: number;

    @IsDate()
    lastUpdated: Date;
}

export class CreateMovieDto {
    @IsString()
    title: string;

    @IsNumber()
    year: number;

    @IsString()
    rated: string;

    @IsNumber()
    runtime: number;

    @IsArray()
    @IsString({ each: true })
    countries: string[];

    @IsArray()
    @IsString({ each: true })
    genres: string[];

    @IsDate()
    released: Date;

    @IsArray()
    @IsString({ each: true })
    directors: string[];

    @IsArray()
    @IsString({ each: true })
    writers: string[];

    @IsArray()
    @IsString({ each: true })
    cast: string[];

    @IsString()
    poster: string;

    @IsString()
    plot: string;

    @IsString()
    fullplot: string;

    @IsString()
    lastupdated: string;

    @IsString()
    type: string;

    @ValidateNested()
    @Type(() => ImdbDto)
    imdb: ImdbDto;

    @ValidateNested()
    @Type(() => AwardsDto)
    awards: AwardsDto;

    @ValidateNested()
    @Type(() => TomatoesDto)
    tomatoes: TomatoesDto;

    @IsNumber()
    num_mflix_comments: number;
}
