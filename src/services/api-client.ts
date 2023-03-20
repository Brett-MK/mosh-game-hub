import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "efcd99665bcb4d79b82ae37b6f634290",
  },
});
