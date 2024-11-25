import React from 'react';

interface TagStripesProps {
  colors: string[];
  width?: string;
}

const TagStripes: React.FC<TagStripesProps> = ({ colors, width = 'w-16' }) => {
  if (!colors) return null;

  return (
    <div className={`flex-col space-y-1 ${width} m-2`}>
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-1"
          style={{ backgroundColor: color, flex: 1 }}
        />
      ))}
    </div>
  );
};

export default TagStripes;
