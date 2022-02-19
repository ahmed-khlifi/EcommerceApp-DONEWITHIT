import { create } from "apisauce";

import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.1.14:9000/api",
});

// send token in the header
apiClient.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();
  if (!token) return;
  request.headers["x-auth-token"] = token;
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
