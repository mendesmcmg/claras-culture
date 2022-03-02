import axios from "axios";

export const getTopics = async () => {
  try {
    const response = await axios.get(
      "https://claras-culture-back.herokuapp.com/topics"
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
