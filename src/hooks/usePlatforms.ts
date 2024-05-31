import { useData } from ".";
import { IPlatform } from "../interfaces";

export  const usePlatforms = () => useData<IPlatform>('/platforms/lists/parents')