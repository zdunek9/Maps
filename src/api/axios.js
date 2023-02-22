import axios from "axios";

const URL_CODE = "https://geocode.search.hereapi.com/v1/geocode?q";
const API_KEY = "ZJ3Ob39XmnQf2_GbGY-NcDd4_Js0BVsm6zM085yN7x4";

export const getPositionAPI = async (addressString) => {
  const replacedStringName = addressString.replace(/ /g, "+");
  const response = await axios.get(
    `${URL_CODE}=${replacedStringName}&apiKey=${API_KEY}`
  );
  const position = [];
  position.push(response.data.items[0].position.lat);
  position.push(response.data.items[0].position.lng);
  return position;
};
