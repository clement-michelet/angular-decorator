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
            new Movie("Back to the future", new Person("Robert", "Zemeckis"), "http://www.backtothefuture.com/"),
            new Movie("Indiana Jones and the Last Crusade", new Person("Steven", "Spielberg")),
            new Movie("Alien", new Person("Ridley", "Scott")),
            new Movie("Blade Runner", new Person("Ridley", "Scott"), "http://wwws.warnerbros.fr/bladerunner/"),
            new Movie("Gremlins", new Person("Joe", "Dante")),
        ]);
    }
}
