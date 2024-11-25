import Image from 'next/image';
import { FC } from 'react';
import DynamicBulletPointContainer from '../../DynamicBulletPointContainer';
import { ContentProps } from '@/types/default-types';
import MobileDynamicBulletPointContainer from '../../MoblieDynamicBulletPointContainer';

interface VerticalCarouselProps {
  imageToRender: string;
  title: string;
  colorFromTag: string;
  colors: string[];
  currentIndex: number;
  exertContent: string;
  goToSlide: (index: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  id: string;
  maxFourContent: ContentProps[];
  type: string;
}

const VerticalCarousel: FC<VerticalCarouselProps> = ({
  imageToRender,
  title,
  colorFromTag,
  colors,
  currentIndex,
  exertContent,
  goToSlide,
  handleNext,
  handlePrev,
  id,
  maxFourContent,
  type,
}) => {
  return (
    <div className="relative md:w-2/4">
      <div className="w-full">
        <Image
          className="shadow-inner 2xl:h-[1075px] xl:h-[875px] lg:h-[765px] md:h-[610px] sm:h-[325px] h-[295px] object-cover"
          src={imageToRender}
          alt={title || 'Content Image'}
          width={1250}
          height={2200}
        />
      </div>
      <div className="absolute z-30 right-2 left-2 bottom-2">
        <div className="hidden xl:flex">
          <DynamicBulletPointContainer
            additionalTwStyles="p-2 bg-white shadow-lg flex flex-col items-center justify-between "
            carouselData={maxFourContent}
            colorFromTag={colorFromTag}
            colors={colors}
            currentIndex={currentIndex}
            exertContent={exertContent}
            goToSlide={goToSlide}
            handleNext={handleNext}
            handlePrev={handlePrev}
            id={id}
            title={title}
            type={type}
            hasTagStripes={false}
            exertTextSize="xl:text-body-small"
            titleTextSize="text-heading-small"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 xl:hidden flex justify-end p-4 ">
          <MobileDynamicBulletPointContainer
            additionalTwStyles="relative p-2 shadow-lg flex flex-col items-center"
            carouselData={maxFourContent}
            titleTextSize="text-2xl"
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
            goToSlide={goToSlide}
            id={id}
            title={title}
            type={type}
          />
        </div>
      </div>
    </div>
  );
};
export default VerticalCarousel;
