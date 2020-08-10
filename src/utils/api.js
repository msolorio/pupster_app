import axios from "axios";

export async function getDogImagesByBreed(breed) {
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    return response.data.message.slice(0, 10);
  } catch(error) {
    console.error("encountered an error in getDogImagesByBreed:", error);
  }
}

export async function getBreedList() {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list");
    return response.data.message;
  } catch(error) {
    console.error("encountered an error in getBreedList");
  }
}

export async function getRandomDogImage() {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    return response.data.message;
  } catch(error) {
    console.error("encountered an error in getRandomDogImage");
  }
}
