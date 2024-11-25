import Button from '@/components/atoms/Button';
import { ContentProps } from '@/types/default-types';
import { FC } from 'react';

interface BulletPointsProps {
  carouselData: ContentProps[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
  goToSlide: (index: number) => void;
  color: string;
  bgColor?: string;
}

const BulletPoints: FC<BulletPointsProps> = ({
  carouselData,
  currentIndex,
  handleNext,
  handlePrev,
  goToSlide,
  color,
  bgColor,
}) => {
  const isBoxShadow =
    bgColor === 'transparent' ? '2px 2px 4px rgba(0, 0, 0, 0.4)' : color;

  return (
    <div className="flex items-center justify-between w-[170px] m-auto">
      {/* Left Arrow */}
      <Button
        type="button"
        onClick={handlePrev}
        style={{ backgroundColor: bgColor !== 'transparent' ? color : bgColor }}
        className={`text-white p-2 rounded ${bgColor === 'transparent' ? '' : 'shadow-md'} `}
      >
        <span
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
            fontWeight: 600,
          }}
        >
          &lt;
        </span>
      </Button>

      {/* Bullet Points */}
      <div className="flex gap-2 items-center">
        {carouselData.map((_: ContentProps, idx: number) => (
          <button
            key={idx}
            className={`rounded-full transition-transform duration-300 justify-center ${
              idx === currentIndex
                ? 'w-[4px] md:w-[6px] h-[4px] md:h-[6px] transform scale-150'
                : 'w-[4px] md:w-[6px] h-[4px] md:h-[6px]'
            }`}
            style={{
              backgroundColor: color,
              boxShadow: isBoxShadow,
            }}
            onClick={() => goToSlide(idx)}
          ></button>
        ))}
      </div>

      {/* Right Arrow */}
      <Button
        type="button"
        onClick={handleNext}
        className={`text-white p-2 rounded ${bgColor === 'transparent' ? '' : 'shadow-md'} `}
        style={{ backgroundColor: bgColor !== 'transparent' ? color : bgColor }}
      >
        <span
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
            fontWeight: 600,
          }}
        >
          &gt;
        </span>
      </Button>
    </div>
  );
};
export default BulletPoints;
