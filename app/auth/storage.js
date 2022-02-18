import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("====================================");
    console.log("error storing auth token", error);
    console.log("====================================");
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("====================================");
    console.log("error getting auth token", error);
    console.log("====================================");
  }
};

const removeToken = async () => {
  try {
    SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("====================================");
    console.log("error deleting auth token", error);
    console.log("====================================");
  }
};

export default {
  getToken,
  storeToken,
  removeToken,
};
