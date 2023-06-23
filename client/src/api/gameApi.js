import axiosClient from "./axiosClient";

export class GameAPI {
  static getAll() {
    const url = "/api/v1/game";
    return axiosClient.get(url);
  }
  static postGame(params) {
    const url = `/api/v1/game`;
    return axiosClient.post(url, params);
  }

  static getById(id) {
    const url = `/api/v1/game/${id}`;
    return axiosClient.get(url);
  }

  static postRoundGame(params) {
    const url = `api/v1/game/${params.id}`;
    return axiosClient.put(url, params);
  }
}
