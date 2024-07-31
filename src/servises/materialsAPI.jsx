import axios from "axios";

axios.defaults.baseURL = "https://66a9f9b6613eced4eba7096c.mockapi.io";

const postMaterial = async values => {
  const newMaterial = await axios.post(`materials/`, values);
  return newMaterial;
};

const getMaterialsList = async () => {
  const materialsList = await axios.get(`materials/`);

  return materialsList;
};

const MaterialsAPI = { postMaterial, getMaterialsList };

export default MaterialsAPI;
