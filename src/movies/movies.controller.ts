import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movies.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService : MoviesService) {}

    @Get()
    getAll() : Movie[] {
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param('id') movieId : string) : Movie {
        return this.moviesService.getOne(movieId);
    }
    
    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.createMovie(movieData);
    }

    @Delete("/:id")
    delete(@Param("id") movieId : string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param('id') movieId : string, @Body() updateData : CreateMovieDto) {
        return this.moviesService.updateMovie(movieId, updateData);
    }

    

}
