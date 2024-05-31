
import { IGenre } from "./gender";

export interface IFetchGenresResponse {
    count :  number;
    results : IGenre[]
}