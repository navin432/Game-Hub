import { HStack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="34px" borderRadius={8} />
      <SkeletonText />
    </HStack>
  );
};

export default GenreListSkeleton;
