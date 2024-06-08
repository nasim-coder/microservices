import { Repository } from 'typeorm';
import { Movie } from './movie.model';
import { CreateMovieDto } from './createMovieDTO';
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<Movie>);
    getAllMovies(): Promise<Movie[]>;
    getMovieById(id: number): Promise<Movie>;
    createMovie(createMovieDto: CreateMovieDto): Promise<Movie>;
    updateMovie(id: number, updateMovieDto: Partial<CreateMovieDto>): Promise<Movie>;
    deleteMovie(id: number): Promise<void>;
}
