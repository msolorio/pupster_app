import axios from "axios";

export async function getDogImagesByBreed(breed) {
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    return response.data.message.slice(0, 10);
  } catch(error) {
    console.error("encountered an error in getDogImagesByBreed:", error);
  }
}

