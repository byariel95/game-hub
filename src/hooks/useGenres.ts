
import { useData } from ".";
import { IGenre } from "../interfaces";


export const useGenres = ()=> useData<IGenre>('/genres')