import { IGame, IGameQuery} from "../interfaces";
import { useData } from ".";



export const useGames = (gameQuery: IGameQuery) =>
    useData<IGame>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder
        }
    }, [gameQuery]);