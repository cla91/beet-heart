import { useQuery } from "@tanstack/react-query";
import fetchRecipeId from "./../utils/fetchRecipeId";

export default function useRecipeId(id) {
  const {
    data: recipe,
    isError,
    isPending,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: fetchRecipeId,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
    enabled: !!id,
  });
  return { recipe, isError, isPending, error, isSuccess };
}
