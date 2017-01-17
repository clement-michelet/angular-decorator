import { Person } from "./person.model";
import { MovieMicrodata } from "../_decorators/movie-microdata.decorator";

@MovieMicrodata({
    "title": "title",
    "url": "website",
    "director": {
        "givenName": "director.firstName",
        "familyName": "director.lastName"
    }
})
export class Movie {
    title: string;
    website?: string;
    director: Person;

    constructor(title: string, director: Person, website?: string) {
        this.title = title;
        this.director = director;
        this.website = website;
    }
}
