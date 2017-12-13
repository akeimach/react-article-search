import axios from "axios";

export default {
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/saved");
  },
  // Saves an article to the database
  postArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  }

};
