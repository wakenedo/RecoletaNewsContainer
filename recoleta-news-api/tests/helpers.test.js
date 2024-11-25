const {
  getRelatedContent,
  getRelatedContentByTag,
  combineAndSortContent,
  validateTags,
} = require("../utils/helpers");

describe("Helper Functions", () => {
  const contentArray = [
    { id: "1", tags: [{ name: "tech" }, { name: "news" }] },
    { id: "2", tags: [{ name: "sports" }] },
  ];
  const tags = ["tech", "sports"];

  it("getRelatedContent should return matching content based on tags", () => {
    const result = getRelatedContent(contentArray, tags);
    expect(result).toEqual([
      { id: "1", tags: [{ name: "tech" }, { name: "news" }] },
      { id: "2", tags: [{ name: "sports" }] },
    ]);
  });

  it("getRelatedContentByTag should handle single and multi-tag scenarios", () => {
    const multiTagContent = [
      { id: "1", tag: "tech" },
      { id: "2", isMultitag: true, tags: [{ name: "sports" }] },
    ];
    const result = getRelatedContentByTag(multiTagContent, tags);
    expect(result).toEqual([multiTagContent[0], multiTagContent[1]]);
  });

  it("combineAndSortContent should combine and sort by date", () => {
    const news = [{ id: "1", date: "2023-12-01" }];
    const articles = [{ id: "2", date: "2023-11-25" }];
    const result = combineAndSortContent(news, articles);
    expect(result).toEqual([
      { id: "1", date: "2023-12-01" },
      { id: "2", date: "2023-11-25" },
    ]);
  });

  it("validateTags should throw an error for invalid tags", () => {
    expect(() => validateTags([])).toThrow("Tags are required");
    expect(() => validateTags(null)).toThrow("Tags are required");
  });
});
