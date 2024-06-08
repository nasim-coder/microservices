import { MovieService } from './movie.service';
import { Movie } from './movie.model';
import { CreateMovieDto } from './createMovieDTO';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAllMovies(): Promise<Movie[]>;
    getMovieById(id: number): Promise<Movie>;
    createMovie(createMovieDto: CreateMovieDto): Promise<Movie>;
    updateMovie(id: number, updateMovieDto: Partial<CreateMovieDto>): Promise<Movie>;
    deleteMovie(id: number): Promise<void>;
}
