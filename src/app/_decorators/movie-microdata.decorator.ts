import { PersonMicrodata } from "./person-microdata.decorator";
import { Movie } from "../_models/movie.model";
import { Type, TypeDecorator } from "@angular/core";

const _getObjectDeepValueByPath = (subject: any, path: string): any => {
    return path.split('.').reduce(
        (value, index) => {
            if (!value) return;
            return value[index];
        },
        subject
    );
};

export interface MovieMicrodata {
    "name": string,
    "url": string,
    "image": string,
    "director": PersonMicrodata
}

export interface MovieMicrodataDecorator {
    (obj: MovieMicrodata): TypeDecorator;

    new (obj: MovieMicrodata): MovieMicrodata;
}

export const MovieMicrodata: MovieMicrodataDecorator = <MovieMicrodataDecorator>function (microdata: MovieMicrodata): Function {
    return (movie: Type<Movie>) => {
        Object.defineProperty(
            movie.prototype,
            "microdata",
            {
                get: function () {
                    return {
                        "name": _getObjectDeepValueByPath(this, microdata.name),
                        "url": _getObjectDeepValueByPath(this, microdata.url),
                        "image": _getObjectDeepValueByPath(this, microdata.image),
                        "director": {
                            givenName: _getObjectDeepValueByPath(this, microdata.director.givenName),
                            familyName: _getObjectDeepValueByPath(this, microdata.director.familyName)
                        }
                    };
                }
            }
        );
    };
};

