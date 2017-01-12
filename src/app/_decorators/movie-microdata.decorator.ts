import { PersonMicrodata } from "./person-microdata.decorator";
import { TypeDecorator } from "@angular/core";

export interface MovieMicrodata {
    "title": string,
    "url": string,
    "director": PersonMicrodata
}

export interface MovieMicrodataDecorator {
    (obj: MovieMicrodata): TypeDecorator;

    new (obj: MovieMicrodata): MovieMicrodata;
}
