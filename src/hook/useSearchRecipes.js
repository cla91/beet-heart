import { useQuery } from "@tanstack/react-query";
import fetchSearchRecipes from "./../utils/fetchSearchRecipes";

export default function useSearchRecipes(query) {
  const {
    data: recipes,
    isError,
    isPending,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["recipes", query],
    queryFn: fetchSearchRecipes,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
    enabled: !!query,
  });
  return { recipes, isError, isPending, error, isSuccess };
}
