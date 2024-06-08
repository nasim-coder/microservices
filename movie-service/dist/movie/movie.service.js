"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_model_1 = require("./movie.model");
let MovieService = class MovieService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async getAllMovies() {
        return this.movieRepository.find();
    }
    async getMovieById(id) {
        const movie = await this.movieRepository.findOne({ where: { id } });
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
        return movie;
    }
    async createMovie(createMovieDto) {
        const newMovie = this.movieRepository.create(createMovieDto);
        return this.movieRepository.save(newMovie);
    }
    async updateMovie(id, updateMovieDto) {
        const movie = await this.movieRepository.findOne({ where: { id } });
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
        Object.assign(movie, updateMovieDto);
        return this.movieRepository.save(movie);
    }
    async deleteMovie(id) {
        const result = await this.movieRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_model_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieService);
//# sourceMappingURL=movie.service.js.map