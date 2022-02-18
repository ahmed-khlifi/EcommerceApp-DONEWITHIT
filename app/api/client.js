import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.1.124:9000/api",
});

// Change the implementaion of apiClient.get() to look at the data at the cache

// create reference of the oringinal method
const get = apiClient.get;
// new get method
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig); // old get method, using same signature

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  // offline handling
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
