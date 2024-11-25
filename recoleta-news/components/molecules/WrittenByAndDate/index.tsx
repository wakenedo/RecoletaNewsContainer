import { ContentProps } from '@/types/default-types';
import { CSSProperties, FC } from 'react';

interface WrittenByAndDateProps {
  contentItem: ContentProps;
  enforceStyle?: CSSProperties;
  textColor?: string;
}

const WrittenByAndDate: FC<WrittenByAndDateProps> = ({
  contentItem,
  enforceStyle,
  textColor,
}) => {
  if (!contentItem) return;

  return (
    <div>
      <span
        style={enforceStyle}
        className={`text-caption-default text-[${textColor}]`}
      >
        Escrito por
        <span className="underline mx-1">{contentItem.author}</span>
        em {contentItem.postedAt.day} de {contentItem.postedAt.month} de{' '}
        {contentItem.postedAt.year}
      </span>
    </div>
  );
};

export default WrittenByAndDate;
