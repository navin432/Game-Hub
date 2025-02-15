import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e080890bf99c4f918b62f318e6f43329",
  },
});
