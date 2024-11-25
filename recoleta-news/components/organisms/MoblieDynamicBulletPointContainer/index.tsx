import Container from '@/components/atoms/Container';
import BulletPoints from '@/components/molecules/BulletPoints';
import WrittenByAndDate from '@/components/molecules/WrittenByAndDate';
import { ContentProps } from '@/types/default-types';
import Link from 'next/link';

import { FC } from 'react';

interface MobileDynamicBulletPointContainerProps {
  carouselData: ContentProps[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
  goToSlide: (index: number) => void;
  title: string;
  id: string;
  type: string;
  width?: string;
  height?: string;
  additionalTwStyles?: string;
  roundedCorners?: '' | 'rounded';
  titleTextSize?: string;
}

const MobileDynamicBulletPointContainer: FC<
  MobileDynamicBulletPointContainerProps
> = ({
  carouselData,
  currentIndex,
  title,
  titleTextSize,
  height,
  width,
  additionalTwStyles,
  handleNext,
  handlePrev,
  goToSlide,
  type,
  id,
}) => {
  return (
    <Container
      width={width}
      height={height}
      additionalTWStyles={additionalTwStyles}
      applyMask={true}
      maskDirection="b-t"
      solidBackground={false}
    >
      <div className=" px-2 text-left  w-full">
        <div className="flex">
          <div>
            <Link href={`/${type}/${id}`}>
              <span
                className={`font-bold ${titleTextSize} tracking-tight text-[#fdfdfd]`}
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)' }}
              >
                {title || 'Untitled'}
              </span>
            </Link>
          </div>
        </div>
        <div className="2xl:my-4">
          <WrittenByAndDate
            enforceStyle={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)' }}
            contentItem={carouselData[currentIndex]}
            textColor="#fdfdfd"
          />
        </div>
        <div>
          <BulletPoints
            carouselData={carouselData}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
            goToSlide={goToSlide}
            bgColor={'transparent'}
            color="#fdfdfd"
          />
        </div>
      </div>
    </Container>
  );
};
export default MobileDynamicBulletPointContainer;
