import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../_models/movie.model";
import { Person } from "../_models/person.model";

@Injectable()
export class MovieService {

    constructor() {
    }

    getMovies(): Observable<Movie[]> {
        return Observable.of([
            new Movie(
                "Back to the future",
                new Person("Robert", "Zemeckis"),
                "http://www.backtothefuture.com/movies/movie_images/poster_bttf1.aspx",
                "http://www.backtothefuture.com/"
            ),
            new Movie(
                "Indiana Jones and the Last Crusade",
                new Person("Steven", "Spielberg"),
                "https://images-na.ssl-images-amazon.com/images/I/511tCngLHSL.jpg"
            ),
            new Movie(
                "Alien",
                new Person("Ridley", "Scott"),
                "http://www.coverwhiz.com/content/Alien.jpg"
            ),
            new Movie(
                "Blade Runner",
                new Person("Ridley", "Scott"),
                "https://images-na.ssl-images-amazon.com/images/I/51L4pjaC1OL._SY450_.jpg",
                "http://wwws.warnerbros.fr/bladerunner/"
            ),
            new Movie(
                "Gremlins",
                new Person("Joe", "Dante"),
                "http://img.cinemablend.com/cb/3/9/a/7/9/6/39a7961c3837d5d9b340299271ac47a78fbcc0d48501c22a4cf852a4e5928ad5.jpg"
            ),
        ]);
    }
}
