export type Tag = 'Sustentabilidade' | 'Sociedade' | 'Governancia';

// Mapping of tag colors
export const tagColorMapping: Record<Tag, string> = {
  Sustentabilidade: '#A6FA7E',
  Sociedade: '#7EE3FA',
  Governancia: '#FF9A51',
};

// Function to get colors based on tags
export const getTagColors = (tags: Tag[]) => {
  const colors = tags.map(tag => tagColorMapping[tag]);

  return colors.filter(color => color); // Filter out undefined colors
};

export const getTagStyles = (tags: Tag[]) => {
  const colors = getTagColors(tags);

  if (colors.length === 0) return { borderColor: '', gradient: '', colors: [] }; // Return empty if no valid colors

  return { borderColor: colors[0], colors }; // Return colors for stripes
};

export const getTestTagStyles = (tags: Tag[], tag: Tag) => {
  // Determine which tags to use based on provided data
  const tagList = tags.length > 0 ? tags : tag ? [tag] : [];

  // Get colors for the determined tags
  const colors = getTagColors(tagList);

  // Return styles based on colors
  if (colors.length === 0) return { borderColor: '', gradient: '', colors: [] }; // Return empty if no valid colors

  return { borderColor: colors[0], colors };
};
