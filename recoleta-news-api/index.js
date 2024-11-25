const express = require("express");
const cors = require("cors");
const { news } = require("./mockedData/News");
const { articles } = require("./mockedData/Articles");
const {
  getRelatedContent,
  getRelatedContentByTag,
  combineAndSortContent,
  validateTags,
} = require("./utils/helpers");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/api/articles", (req, res) => res.json(articles));
app.get("/api/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id === req.params.id);
  if (article) res.json(article);
  else res.status(404).json({ message: "Article not found" });
});
app.get("/api/news", (req, res) => res.json(news));
app.get("/api/news/:id", (req, res) => {
  const singleNews = news.find((n) => n.id === req.params.id);
  if (singleNews) res.json(singleNews);
  else res.status(404).json({ message: "News not found" });
});
app.get("/api/content", (req, res) =>
  res.json(combineAndSortContent(news, articles))
);
app.post("/api/related/content", (req, res) => {
  try {
    const { tags } = req.body;
    validateTags(tags);
    const relatedNews = getRelatedContentByTag(news, tags);
    const relatedArticles = getRelatedContentByTag(articles, tags);
    const relatedContent = [...relatedNews, ...relatedArticles];
    if (relatedContent.length > 0) res.json(relatedContent);
    else res.status(404).json({ message: "No related content found." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.post("/api/related/:type", (req, res) => {
  try {
    const { type } = req.params;
    const { tags } = req.body;
    validateTags(tags);
    let relatedContent = [];
    if (type === "articles") relatedContent = getRelatedContent(articles, tags);
    else if (type === "news") relatedContent = getRelatedContent(news, tags);
    else throw new Error("Invalid type. Must be 'articles' or 'news'.");
    if (relatedContent.length > 0) res.json(relatedContent);
    else res.status(404).json({ message: "No related content found." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app; // Export the app for testing
