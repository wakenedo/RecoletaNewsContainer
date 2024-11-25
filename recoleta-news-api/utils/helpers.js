// Filters content based on matching tags
const getRelatedContent = (contentArray, tags) => {
  return contentArray.filter((item) =>
    item.tags.some((tag) => tags.includes(tag.name))
  );
};

// Handles single-tag and multi-tag content filtering
const getRelatedContentByTag = (contentArray, tags) => {
  return contentArray.filter((item) => {
    const singleTagMatch = item.tag && tags.includes(item.tag);
    const multiTagMatch =
      item.isMultitag && item.tags.some((tag) => tags.includes(tag.name));
    return singleTagMatch || multiTagMatch;
  });
};

// Combines and sorts content by date
const combineAndSortContent = (news, articles) => {
  return [...news, ...articles].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

// Validates tags in request body
const validateTags = (tags) => {
  if (!tags || tags.length === 0) {
    throw new Error("Tags are required");
  }
};

module.exports = {
  getRelatedContent,
  getRelatedContentByTag,
  combineAndSortContent,
  validateTags,
};
