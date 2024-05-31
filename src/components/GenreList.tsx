import { HStack, List, ListItem,Image, Button} from "@chakra-ui/react";
import { useGenres } from "../hooks"
import { getCroppedImageUrl } from "../utils";
import { GenreListSkeleton } from "./GenreListSkeleton";
import { IGenre } from "../interfaces";


interface Props {
  onSelectedGenre: (genre: IGenre) =>void,
  selectedGenre: IGenre | null
}

export const GenreList = ({onSelectedGenre,selectedGenre}: Props) => {

  const { data,isLoading,error} = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6,7,8, 9,10, 11, 12,13,14 ,15]
  if (error) return null
  return (
    <List>
      {isLoading && skeletons.map(skeleton => (
        <ListItem paddingY='5px' key={skeleton}>
          <GenreListSkeleton/>
        </ListItem>
      ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} onClick={()=> onSelectedGenre(genre)} fontSize={'lg'} variant='link' >{genre.name}</Button>
          </HStack>
        </ListItem> ))}
    </List>
  )
}
