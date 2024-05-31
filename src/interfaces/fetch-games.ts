import { IGame } from "./games";

export interface IFetchGamesResponse {
    count :  number;
    results : IGame[]
}