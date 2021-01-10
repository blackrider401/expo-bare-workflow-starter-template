import { graphqlEndPoint, restEndPoint } from "../config/config";
import Axios from "axios";

class ApiRequest {
  static async postNoToken(query) {
    try {
      let res = await Axios.post(graphqlEndPoint, { query });
      return res.data.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ApiRequest;
