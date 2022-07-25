import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// Here the 'movies' is the main router that this module uses
@Controller('movies')
export class MoviesController {
    // A controller in NestJS is something like a routers in expressJS
    constructor(private readonly moviesService : MoviesService) {}

    @Get()
    getAll() : Movie[] {
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param('id') movieId : number) : Movie {
        return this.moviesService.getOne(movieId);
    }
    
    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.createMovie(movieData);
    }

    @Delete("/:id")
    delete(@Param("id") movieId : number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param('id') movieId : number, @Body() updateData : UpdateMovieDto) {
        return this.moviesService.updateMovie(movieId, updateData);
    }

    

}
