import { HStack, Skeleton, SkeletonText, } from "@chakra-ui/react"


export const GenreListSkeleton = () => {


    return (
        <HStack>
            <Skeleton borderRadius={8} height='34px' width='34px' />
            <SkeletonText noOfLines={1} width='75%' />
        </HStack>
    )
}
