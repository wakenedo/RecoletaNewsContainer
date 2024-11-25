import Container from '@/components/atoms/Container';
import { useCarouselData } from '@/hooks/useCarouselData';
import { FetchApiError } from '@/types/fetch-api-error-types';
import { getTestTagStyles, Tag, tagColorMapping } from '@/utils/tagUtils';
import { FC, useState } from 'react';
import Image from 'next/image';
import useFetchRelatedNewsAndArticles from '@/hooks/useFetchRelatedNewsAndArticles';
import ByTagRelatedSection from './ByTagRelatedSection';
import VerticalCarousel from './VerticalCarousel';

interface CarouselByTagProps {
  headerTitle: string;
  headerBgImg: string;
  isFlexRowReverse: boolean;
  marginAuto?: string;
  _tag: string;
}

const CarouselByTag: FC<CarouselByTagProps> = ({
  headerTitle = 'Default Title',
  headerBgImg = '/image/Governance.png',
  isFlexRowReverse = false,
  marginAuto = 'ml-auto',
  _tag,
}) => {
  const { loading, error } = useCarouselData();
  const { content } = useFetchRelatedNewsAndArticles([_tag] as Tag[]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxFourContent = content.slice(0, 4); // Limit the number of slides to 4

  // Handlers for changing slides
  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === maxFourContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? maxFourContent.length - 1 : prevIndex - 1
    );
  };

  // Bullet point navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // If there's no data yet, show loading or error state
  if (loading) return <div>Loading...</div>;

  if (error as FetchApiError) {
    return (
      <div>
        <h3>Error fetching content: {error?.message}</h3>
        {/* You can add more detailed handling based on the specific error types */}
      </div>
    );
  }

  if (maxFourContent.length === 0) {
    return <div>No content available.</div>;
  }

  const {
    title,
    tag,
    tags,
    isMultitag,
    id,
    type,
    exertContent,
    isMultiImage,
    image,
    images,
  } = maxFourContent[currentIndex] || {};

  const parsedTags = isMultitag ? tags.map(tag => tag.name) : [tag.name]; // Ensure tag is wrapped in an array

  // Get colors using the updated getTagStyles function
  const { colors } = getTestTagStyles(
    isMultitag ? (parsedTags as Tag[]) : [],
    !isMultitag ? (tag as unknown as Tag) : 'Governancia'
  );

  const tagColor = tagColorMapping[_tag as Tag];

  const colorFromTag = colors[0];

  // Render the correct image based on the content type (multiImage vs single image)
  const imageToRender =
    isMultiImage && images?.length > 0
      ? images[0].src
      : image || 'https://placehold.it/1250x2200'; // Default placeholder

  console.log('content', content, content[currentIndex], imageToRender);

  return (
    <div className={`2xl:w-4/6 xl:w-5/6 relative ${marginAuto} shadow-md`}>
      <div className="text-heading-default absolute left-4  font-bold-xl text-recoleta_light_gray">
        <span
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          {headerTitle}
        </span>
      </div>
      <div
        className="w-3 h-3 absolute rounded-full right-4 top-3"
        style={{ background: tagColor }}
      />
      <div className="z-10 rounded-t">
        <div className="z-20 h-[35px]">
          <Image
            className="rounded-t h-[35px] w-full object-cover"
            src={headerBgImg}
            alt="headerCarouseByTag"
            width={1440}
            height={35}
          />
        </div>
        <Container
          borderStyles="border-t-0 border-2"
          applyBorder={true}
          applyMask={false}
          solidBackground={true}
          height=""
          width="w-full"
          roundedCorners=""
          additionalTWStyles="rounded-b p-3"
          style={{ borderColor: tagColor }}
        >
          <Container
            roundedCorners=""
            applyBorder={false}
            applyMask={false}
            additionalTWStyles=""
          >
            <div
              className={`md:flex ${isFlexRowReverse ? 'flex-row-reverse' : ''} `}
            >
              <VerticalCarousel
                imageToRender={imageToRender}
                title={title}
                colorFromTag={colorFromTag}
                colors={colors}
                currentIndex={currentIndex}
                exertContent={exertContent}
                goToSlide={goToSlide}
                handleNext={handleNext}
                handlePrev={handlePrev}
                id={id}
                maxFourContent={maxFourContent}
                type={type}
              />
              <ByTagRelatedSection isFlexRowReverse={isFlexRowReverse} />
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
};
export default CarouselByTag;
