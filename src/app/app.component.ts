import { Component } from "@angular/core";
import { MovieService } from "./_services/movie.service";
import { Movie } from "./_models/movie.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MovieService]
})
export class AppComponent {
    movies: Movie[];

    constructor(private movieService: MovieService) {
    }

    getMovies(): void {
        this.movieService.getMovies().subscribe(movies => this.movies = movies);
    }
    ngOnInit(): void {
        this.getMovies();
    }
}
