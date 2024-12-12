import { axiosInstance } from "../api/interceptors";

class EventService {
  BASE_URL = "/event";

  async getEvents() {
    const response = await axiosInstance.get(this.BASE_URL);
    return response;
  }

  async createEvent(data) {
    const response = await axiosInstance.post(this.BASE_URL, data);
    return response;
  }

  async getEventById(id) {
    const response = await axiosInstance.get(`${this.BASE_URL}/${id}`);
    return response;
  }
}

export const eventService = new EventService();
