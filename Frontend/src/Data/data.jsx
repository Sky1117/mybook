import axios from "axios";
const getbook = async (setList) => {
  try {
    const res = await axios.get("http://localhost:3001/api/books");
    setList(res.data);
  } catch (error) {
    console.log("Error", error);
  }
};

export default getbook;
