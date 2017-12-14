import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "d9ad9f278672440d852d686e5705cd2a";

export default {
  // Does a search for articles matching parameters
  searchArticles: function(searchData) {
    return axios.get(`${BASEURL}?q=${searchData.searchTerm}&begin_date=${searchData.startYear || 2017}0101&end_date=${searchData.endYear || 2017}1231&sort=newest&api-key=${APIKEY}`);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    console.log("API POST");
    return axios.post("/api/saved", articleData);
  },
  // Gets all saved articles
  getArticles: function() {
    console.log("API GET");
    return axios.get("/api/saved");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    console.log("API DELETE");
    return axios.delete("/api/saved/" + id);
  }

};
