import { axiosInstance } from "../api/interceptors";

class ParticipantService {
  BASE_URL = "/participant";

  async getParticipants() {
    const response = await axiosInstance.get(this.BASE_URL);
    return response;
  }

  async getEventParticipants(id, searchString) {
    if(searchString) {
      const response = await axiosInstance.get(`${this.BASE_URL}/event/${id}/${searchString}`);
      return response
    }
    const response = await axiosInstance.get(`${this.BASE_URL}/event/${id}`);
    return response;
  }

  async getRegistrationsByDay(eventId) {
    const response = await axiosInstance.get(`${this.BASE_URL}/registrations/${eventId}`);
    return response;
  }


  async createParticipant(data) {
    const response = await axiosInstance.post(this.BASE_URL, data);
    return response;
  }

  

}

export const participantService = new ParticipantService();
