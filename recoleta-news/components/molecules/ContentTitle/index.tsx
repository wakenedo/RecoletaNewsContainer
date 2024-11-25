import { ContentProps } from '@/types/default-types';
import { FC } from 'react';

interface ContentTitleProps {
  contentItem: ContentProps;
}

const ContentTitle: FC<ContentTitleProps> = ({ contentItem }) => {
  if (!contentItem) return null;

  return (
    <div>
      <span className="md:text-heading-large text-heading-default font-bold-lg tracking-tight">
        {contentItem.title}
      </span>
    </div>
  );
};
export default ContentTitle;
