import ApiService from "./ApiService";

export default {

    getData: async () => {
        ApiService.get(`${process.env.API_URL}/entries`);
    }

}