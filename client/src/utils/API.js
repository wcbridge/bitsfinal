import axios from "axios";

export default {
  // Gets all hours
  getHours: function() {
    return axios.get("/api/hours");
  },
  // Gets the hour with the given id
  getHour: function(id) {
    return axios.get("/api/hours/" + id);
  },
  // Deletes the hour with the given id
  deleteHour: function(id) {
    return axios.delete("/api/hours/" + id);
  },
  // Saves a hour to the database
  saveHour: function(hourData) {
    return axios.post("/api/hours", hourData);
  }
};
