import { ContentProps } from '@/types/default-types';
import { FC } from 'react';

interface QuotationsProps {
  newsItem: ContentProps;
}

const Quotations: FC<QuotationsProps> = ({ newsItem }) => {
  if (!newsItem) return;

  return (
    <div className="font-semibold text-justify max-w-[620px] m-auto">
      <div>
        <span>&quot</span>
        {newsItem.quotations.quoteText}
        <span>&quot</span>
      </div>
      <div>
        <div className="flex space-x-1 relative ml-[362px] -mt-2">
          <div>
            <span>{newsItem.quotations.quoted.name}</span>
          </div>
          {','}
          <div>
            <span>{newsItem.quotations.quoted.position}</span>
          </div>
          <div>
            <span>da</span>
          </div>
          <div>
            <span>{newsItem.quotations.quoted.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotations;
