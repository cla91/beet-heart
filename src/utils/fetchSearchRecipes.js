import axios from "axios";

export default async function fetchSearchRecipes({ queryKey }) {
  const [, query] = queryKey;
  try {
    const response = await axios.post("/.netlify/functions/searchRecipes", {
      query,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Big error");
  }
}
