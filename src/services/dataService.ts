import axios from "axios";

export const getData = async () => {
  const url = "http://localhost:3000/mydata";
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
