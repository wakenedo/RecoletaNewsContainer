import Container from '@/components/atoms/Container';
import BulletPoints from '@/components/molecules/BulletPoints';
import TagStripes from '@/components/molecules/TagStripes';
import WrittenByAndDate from '@/components/molecules/WrittenByAndDate';
import { ContentProps } from '@/types/default-types';
import Link from 'next/link';
import { FC } from 'react';

interface DynamicBulletPointContainerProps {
  carouselData: ContentProps[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
  goToSlide: (index: number) => void;
  colorFromTag: string;
  colors: string[];
  title: string;
  id: string;
  exertContent: string;
  type: string;
  width?: string;
  height?: string;
  additionalTwStyles?: string;
  roundedCorners?: '' | 'rounded';
  borderStyles?: string;
  hasTagStripes?: boolean;
  exertTextSize?: string;
  titleTextSize?: string;
}

const DynamicBulletPointContainer: FC<DynamicBulletPointContainerProps> = ({
  carouselData,
  currentIndex,
  handleNext,
  handlePrev,
  goToSlide,
  colorFromTag,
  colors,
  title,
  id,
  height,
  width,
  exertContent,
  type,
  additionalTwStyles = `
    relative
    p-2
    bg-white
    shadow-lg
    flex
    flex-col
    items-center
    justify-between`,
  roundedCorners = 'rounded',
  borderStyles = 'border-l-2 rounded',
  hasTagStripes = true,
  exertTextSize = 'xl:text-body-large',
  titleTextSize = 'text-heading-default',
}) => {
  return (
    <Container
      width={width}
      height={height}
      additionalTWStyles={additionalTwStyles}
      roundedCorners={roundedCorners}
      applyShadowEffect={true}
      applyMask={false}
      solidBackground={true}
      applyBorder={true}
      borderStyles={borderStyles}
      style={{ borderColor: colorFromTag }}
    >
      {/* Title and Tags */}
      <div className=" px-6 my-6 text-left  w-full">
        <div>
          <span className={`font-bold ${titleTextSize} tracking-tight`}>
            {title || 'Untitled'}
          </span>
        </div>
        <div className="2xl:my-4">
          <WrittenByAndDate contentItem={carouselData[currentIndex]} />
        </div>
        <div className="2xl:my-16 px-10 my-3">
          <span className={`font-serif ${exertTextSize}`}>
            {exertContent}
            <Link
              style={{
                color: colorFromTag,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
              }}
              className="inline ml-1 -mt-2" // Ensure it's inline
              href={`/${type}/${id}`}
            >
              ...Leia Mais
            </Link>
          </span>
        </div>
      </div>
      <div>
        <div className="min-h-10 absolute pl-4 right-10">
          {hasTagStripes && <TagStripes colors={colors} width="w-10" />}
        </div>
        <div>
          <BulletPoints
            carouselData={carouselData}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
            goToSlide={goToSlide}
            color={colorFromTag}
          />
        </div>
      </div>
    </Container>
  );
};
export default DynamicBulletPointContainer;
