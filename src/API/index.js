import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const getData = async (urlData) => {
  try {
    const res = await axios.get(`${URL}/${urlData}`, options);
    return { seccess: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { seccess: false };
  }
};

export { getData };
