import { Person } from "./person.model";

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
