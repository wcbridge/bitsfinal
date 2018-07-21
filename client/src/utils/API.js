import axios from "axios";

export default {
  // Gets all books
  getHours: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getHour: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteHour: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveHour: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
