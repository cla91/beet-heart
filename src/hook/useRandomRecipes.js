import { useQuery } from "@tanstack/react-query";
import fetchRandomRecipes from "./../utils/fetchRandomRecipes";

export default function useRandomRecipes() {
  const {
    data: recipes,
    isError,
    isPending,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["randomRecipes"],
    queryFn: fetchRandomRecipes,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });
  return { recipes, isError, isPending, error, isSuccess };
}
