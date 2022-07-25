import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movies.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string) : Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if(!movie) {
            throw new NotFoundException(`Movie id ${id} is not exist`);
        }
        return movie;
    }

    deleteOne(id: string) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
        
    }

    createMovie(movieData: CreateMovieDto) {
        this.movies.push({
            id : this.movies.length + 1,
            ...movieData
        })
    }

    updateMovie(id: string, updateData : CreateMovieDto) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData})
    }
}
