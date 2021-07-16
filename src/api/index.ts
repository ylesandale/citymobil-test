import axios from "axios";

const instance = axios.create({
  baseURL: "https://city-mobil.ru",
});

export const onGetCars = () => {
  return instance.get("/api/cars");
};
