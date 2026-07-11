import axios from "axios";

const apiKey = process.env.REACT_APP_RAPID_API_KEY;
const apiHost = process.env.REACT_APP_RAPID_API_HOST;

export async function translateText(text, source, target) {
  if (!apiKey || !apiHost) {
    throw new Error("API settings are missing. Add your RapidAPI values to the .env file and restart the app.");
  }

  const response = await axios.post(
    `https://${apiHost}/t`,
    { from: source, to: target, e: "", q: text.split("\n") },
    {
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost
      }
    }
  );

  return response.data.map((item) => Array.isArray(item) ? item[0] : item).join("\n");
}
