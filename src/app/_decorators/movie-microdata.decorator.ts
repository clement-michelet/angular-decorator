import { PersonMicrodata } from "./person-microdata.decorator";

export interface MovieMicrodata {
    "title": string,
    "url": string,
    "director": PersonMicrodata
}
