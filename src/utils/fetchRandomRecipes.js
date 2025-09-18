import axios from "axios";

export default async function fetchRandomRecipes() {
  try {
    const response = await axios.post("/.netlify/functions/randomRecipes");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Big error");
  }
}
