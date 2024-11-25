import Container from '@/components/atoms/Container';
import { ContentProps } from '@/types/default-types';
import Image from 'next/image';
import { FC } from 'react';
import WrittenByAndDate from '../WrittenByAndDate';
import Link from 'next/link';

interface ArticleCardProps {
  title?: string;
  image?: string;
  alt?: string;
  colors?: string[];
  type?: string;
  id?: string;
  content: ContentProps[];
}

export const ArticleCard: FC<ArticleCardProps> = ({
  title = 'Article Card Title: Long Title Here',
  image = 'https://placehold.co/600x500',
  alt = 'Article',
  colors = ['#A6FA7E'],
  type,
  id,
  content,
}) => {
  const colorFromTag = colors[0];

  const MappedContentForAuthorAndDate = () => {
    return content.map((item, index) => {
      return <WrittenByAndDate key={index} contentItem={item} />;
    });
  };

  return (
    <div className="relative p-4">
      <Container
        additionalTWStyles="p-4"
        width="md:w-[318px]"
        height="h-fit"
        isFluid={true}
        applyMask={false}
        solidBackground={true}
        backgroundColor="white" // Add solid background if needed
        applyShadowEffect={true}
        shadowEffect="shadow-xl" // Tailwind shadow classes
        applyBorder={true} // Set to false since we are handling borders manually
        borderStyles="border-2 border-[#ededed]"
        roundedCorners=""
      >
        <div>
          <Image
            src={image}
            alt={alt}
            className="shadow-lg  h-[200px] object-cover"
            width={500}
            height={400}
          />
        </div>
        <div className="mt-4">
          <h1 className="font-sans md:text-body-large tracking-wider select-none ">
            {title}
          </h1>

          {MappedContentForAuthorAndDate()}
          <Link
            style={{
              color: colorFromTag,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
            }}
            className="inline -mt-2 text-body-small" // Ensure it's inline
            href={`/${type}/${id}`}
          >
            Ver Mais
          </Link>
        </div>
      </Container>
    </div>
  );
};
