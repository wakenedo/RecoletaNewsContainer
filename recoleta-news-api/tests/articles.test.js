// tests/articles.test.js
const { articles } = require("../mockedData/Articles"); // replace with actual path to articles.js

// Check if articles array exists and has correct structure
describe("Articles Data Structure", () => {
  it("should be an array", () => {
    expect(Array.isArray(articles)).toBe(true);
  });

  it("should contain at least one article", () => {
    expect(articles.length).toBeGreaterThan(0);
  });

  // Check structure of each article
  articles.forEach((article, index) => {
    describe(`Article ${index + 1}`, () => {
      it("should have an id of type string", () => {
        expect(typeof article.id).toBe("string");
      });

      it("should have a type of type string", () => {
        expect(typeof article.type).toBe("string");
      });

      it("should have an image of type string", () => {
        expect(typeof article.image).toBe("string");
      });

      it("should have isMultiImage of type boolean", () => {
        expect(typeof article.isMultiImage).toBe("boolean");
      });

      it("should have images as an array", () => {
        expect(Array.isArray(article.images)).toBe(true);
      });

      it("should have a tag of type string", () => {
        expect(typeof article.tag).toBe("string");
      });

      it("should have an author of type string", () => {
        expect(typeof article.author).toBe("string");
      });

      it("should have postedAt with correct structure", () => {
        expect(typeof article.postedAt).toBe("object");
        expect(typeof article.postedAt.year).toBe("string");
        expect(typeof article.postedAt.month).toBe("string");
        expect(typeof article.postedAt.day).toBe("string");
        expect(typeof article.postedAt.time).toBe("string");
      });

      it("should have a title of type string", () => {
        expect(typeof article.title).toBe("string");
      });
    });
  });
});
