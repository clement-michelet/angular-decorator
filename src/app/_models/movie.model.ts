import { Person } from "./person.model";
import { MovieMicrodata } from "../_decorators/movie-microdata.decorator";

@MovieMicrodata({
    "name": "title",
    "url": "website",
    "image": "cover",
    "director": {
        "givenName": "director.firstName",
        "familyName": "director.lastName"
    }
})
export class Movie {
    title: string;
    website?: string;
    cover: string;
    director: Person;

    constructor(title: string, director: Person, cover: string, website?: string) {
        this.title = title;
        this.director = director;
        this.cover = cover;
        this.website = website;
    }
}
