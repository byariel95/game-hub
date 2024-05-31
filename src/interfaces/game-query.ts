import { IGenre, IPlatform } from ".";

 export interface IGameQuery {
    genre: IGenre | null;
    platform : IPlatform | null;
    sortOrder: string;

}