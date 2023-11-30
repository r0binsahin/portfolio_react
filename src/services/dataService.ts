import axios from "axios";

export const getData = async (url: string) => {
  try {
    const response = await axios.get("http://localhost:3000/" + url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
