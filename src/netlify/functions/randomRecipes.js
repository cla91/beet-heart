import axios from "axios";

export async function handler() {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "SPOONACULAR_API_KEY is not set." }),
    };
  }
  try {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&sort=random&number=6&addRecipeInformation=true&apiKey=${apiKey}`;
    const response = await axios.get(apiUrl);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response.data.results),
    };
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    const message = error.response
      ? error.response.data.message
      : "An unknown error has occurred. Check your connection.";
    console.error("error during call: ", error.message);
    return {
      statusCode: status,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: message }),
    };
  }
}
