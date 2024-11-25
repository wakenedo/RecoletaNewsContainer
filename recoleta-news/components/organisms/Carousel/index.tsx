import React, { useState } from 'react';
import { getTestTagStyles, Tag } from '@/utils/tagUtils'; // Your tag logic functions
import { useCarouselData } from '@/hooks/useCarouselData';
import { FetchApiError } from '@/types/fetch-api-error-types';
import DynamicBulletPointContainer from '../DynamicBulletPointContainer';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles
import MobileDynamicBulletPointContainer from '../MoblieDynamicBulletPointContainer';

const Carousel = () => {
  const { carouselData, loading, error } = useCarouselData(); // Fetch carousel data using the custom hook
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxFiveContent = carouselData.slice(0, 5); // Limit the number of slides to 5

  console.log('carouselData', carouselData);
  console.log('maxFiveContent', maxFiveContent);

  // Handlers for changing slides
  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === maxFiveContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? maxFiveContent.length - 1 : prevIndex - 1
    );
  };

  // Bullet point navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // If there's no data yet, show loading or error state
  if (loading) {
    return (
      <div className="relative w-full mb-2">
        {/* Wrapping Skeleton in a div with explicit height and width */}
        <div className="w-full h-[800px] ">
          <Skeleton height={800} width="100%" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-end p-4">
          {/* Content Skeleton wrapped with explicit styles */}
          <div className="2xl:h-[600px] xl:h-[570px] relative p-2 shadow-lg bg-gray-200 flex flex-col items-center 2xl:w-2/5 xl:w-5/12">
            <div className="space-y-10 flex-col mx-10">
              <div className="mt-10 ">
                <Skeleton height={90} width={660} />
              </div>
              <div className="2xl:ml-[54px]">
                <Skeleton height={300} width={560} />
              </div>
              <div className="2xl:ml-60">
                <Skeleton height={40} width={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error as FetchApiError) {
    return (
      <div>
        <h3>Error fetching content: {error?.message}</h3>
        {/* You can add more detailed handling based on the specific error types */}
      </div>
    );
  }

  if (maxFiveContent.length === 0) {
    return <div>No content available.</div>;
  }

  // Destructure current slide data with optional chaining in case of data issues
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
  } = maxFiveContent[currentIndex] || {};

  const parsedTags = isMultitag ? tags.map(tag => tag.name) : [tag.name]; // Ensure tag is wrapped in an array

  // Get colors using the updated getTagStyles function
  const { colors } = getTestTagStyles(
    isMultitag ? (parsedTags as Tag[]) : [],
    !isMultitag ? (tag as unknown as Tag) : 'Governancia'
  );

  console.log(
    'maxFiveContent[currentIndex]',
    tags,
    tag,
    parsedTags,
    'colors',
    colors,
    maxFiveContent[currentIndex]
  );

  const colorFromTag = colors[0];

  // Render the correct image based on the content type (multiImage vs single image)
  const imageToRender =
    isMultiImage && images?.length > 0
      ? images[0].src
      : image || 'https://placehold.it/1250x2200'; // Default placeholder

  console.log(imageToRender);

  return (
    <div className="relative w-full">
      {/* Carousel Image */}
      <Image
        src={imageToRender}
        alt="carousel"
        className="shadow-inner 2xl:h-[800px] xl:h-[800px] lg:h-[800px] md:h-[800px] sm:h-[400px] h-[300px]  object-cover w-full"
        width={1880}
        height={1075}
      />

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 md:flex hidden justify-end p-4 ">
        <DynamicBulletPointContainer
          additionalTwStyles="relative p-2 bg-white shadow-lg flex flex-col items-center"
          width="2xl:w-[750px] xl:w-[650px] lg:w-[550px] md:w-[550px] sm:w-[450px]"
          height="2xl:h-[600px] xl:h-[530px] lg:h-[530px] md:h-[530px] sm:h-[250px]"
          carouselData={maxFiveContent}
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
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 md:hidden flex justify-end p-4 ">
        <MobileDynamicBulletPointContainer
          additionalTwStyles="relative p-2 shadow-lg flex flex-col items-center"
          carouselData={maxFiveContent}
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
  );
};

export default Carousel;
