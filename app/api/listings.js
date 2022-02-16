import client from "./client";

const endpoint = "listings";

const getListings = async () => client.get(endpoint);

export default {
  getListings,
};
