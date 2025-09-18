import axios from "axios";

export default async function fetchRecipeId({ queryKey }) {
  const [, id] = queryKey;
  try {
    const response = await axios.post("/.netlify/functions/searchRecipeId", {
      id,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Big error");
  }
}
