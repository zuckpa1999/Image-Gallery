import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com ",
  headers: {
    Authorization:
      "Client-ID 17556482ff0020535f278f94af188bd49240691e19ef482a3c8e0c2f9d2931ec"
  }
});
