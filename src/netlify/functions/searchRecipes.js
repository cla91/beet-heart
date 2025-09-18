import axios from "axios";

const handler = async (event) => {
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "SPOONACULAR_API_KEY is not setted." }),
    };
  }

  const { query } = JSON.parse(event.body);

  try {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=9&addRecipeInformation=true&query=${encodeURIComponent(
      query
    )}&apiKey=${apiKey}`;

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
};

export { handler };
