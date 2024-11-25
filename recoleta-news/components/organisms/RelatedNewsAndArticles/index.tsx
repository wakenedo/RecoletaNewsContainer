import Container from '@/components/atoms/Container';
import { ArticleCard } from '@/components/molecules/ArticleCard';
import { NewsCard } from '@/components/molecules/NewsCard';
import useFetchRelatedContent from '@/hooks/useFetchRelatedContent';
import { ContentProps } from '@/types/default-types';
import { getGradientCoverageBreakpoints } from '@/utils/gradientUtils';
import { getTagStyles, Tag } from '@/utils/tagUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles

interface RelatedNewsAndArticlesProps {
  url: 'news' | 'articles';
  tags?: Tag[];
  excludeId?: string;
}

const RelatedNewsAndArticles: React.FC<RelatedNewsAndArticlesProps> = ({
  url,
  tags = [],
  excludeId,
}) => {
  const { content, loading, error } = useFetchRelatedContent(
    url,
    tags,
    excludeId
  );

  const gradientCoverage1 = getGradientCoverageBreakpoints(
    '20',
    '20',
    '10',
    '10',
    '10',
    '20'
  );
  const gradientCoverage2 = getGradientCoverageBreakpoints(
    '20',
    '20',
    '10',
    '10',
    '10',
    '20'
  );

  console.log('content', content);

  const isNewsOrArticle = (url: string) => {
    switch (url) {
      case 'news':
        return 'Notícias Relacionadas';
      case 'articles':
        return 'Artigos Relacionados';
      default:
        return 'Related Content';
    }
  };

  const determineColorFromUrl = (url: string) => {
    switch (url) {
      case 'news':
        return '#005265';
      case 'articles':
        return '#874800';
      default:
        return '#000000';
    }
  };

  const colorForGradient = determineColorFromUrl(url);
  const titleColor = `text-[${colorForGradient}]`;
  const titleStyles = `${titleColor} select-none font-sans font-bold-xl text-heading-small md:text-heading-default`;

  const renderContentCard = (contentItem: ContentProps) => {
    // Determine if the content item has multiple tags or a single tag
    let tags: Tag[] = [];

    if (contentItem.isMultitag) {
      // If isMultitag is true, extract tags from the tags array
      tags = contentItem.tags.map((tag: { name: string }) => tag.name as Tag); // Cast to Tag type
    } else if (contentItem.tag) {
      // If isMultitag is false, use the single flag
      tags = [contentItem.tags as unknown as Tag]; // Cast to Tag type
    }

    // Get the styles for the tags related to this content item
    const { colors } = getTagStyles(tags); // Get the colors array

    console.log('tags', tags);
    console.log('colors', colors); // Log the colors to verify

    const imageToRender =
      contentItem.isMultiImage && contentItem.images?.length > 0
        ? contentItem.images[0].src
        : contentItem.image || 'https://placehold.it/1250x2200';

    if (url === 'news') {
      return (
        <NewsCard
          key={contentItem.id}
          {...contentItem}
          colors={colors}
          content={content}
          image={imageToRender}
        />
      );
    } else if (url === 'articles') {
      return (
        <ArticleCard
          key={contentItem.id}
          {...contentItem}
          colors={colors}
          content={content}
          image={imageToRender}
        />
      );
    }
  };

  console.log('tag', tags);

  if (loading) {
    return (
      <Container
        color1={colorForGradient} // Custom first gradient color: ;
        color2="transparent" // Custom second gradient color
        additionalTWStyles="p-6 mb-6"
        width="w-full"
        height="h-full"
        isFluid={true}
        gradientCoverage1={gradientCoverage1}
        gradientCoverage2={gradientCoverage2}
        maskOpacity={0.3}
        maskDirection="t-b" // can be 't-b', 'b-t', 'l-r', or 'r-l'
        solidBackground={true}
        backgroundColor="white" // Add solid background if needed
        applyShadowEffect={true}
        roundedCorners="rounded" // Apply rounded corners
        shadowEffect="shadow-lg" // Tailwind shadow classes
      >
        <div className="md:mt-5">
          <span className={titleStyles} style={{ color: colorForGradient }}>
            {isNewsOrArticle(url)}
          </span>
        </div>
        <div className="mt-4 space-y-2 md:mt-14 md:ml-2 md:flex md:space-x-4 md:space-y-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              className="lg:w-[300px] lg:h-[350px] md:w-[250px] md:h-[200px]   w-[200px] h-[250px]"
              style={{ marginBottom: '10px' }}
            />
          ))}
        </div>
      </Container>
    );
  }

  if (error) {
    return <p>Error loading related content: {error}</p>;
  }

  return (
    <Container
      color1={colorForGradient} // Custom first gradient color
      color2="transparent" // Custom second gradient color
      additionalTWStyles="p-6 mb-6"
      width="w-full"
      height="h-full"
      isFluid={true}
      gradientCoverage1={gradientCoverage1}
      gradientCoverage2={gradientCoverage2}
      maskOpacity={0.3}
      maskDirection="t-b" // can be 't-b', 'b-t', 'l-r', or 'r-l'
      solidBackground={true}
      backgroundColor="white" // Add solid background if needed
      applyShadowEffect={true}
      roundedCorners="rounded" // Apply rounded corners
      shadowEffect="shadow-lg" // Tailwind shadow classes
    >
      <div className="md:mt-5">
        <span className={titleStyles} style={{ color: colorForGradient }}>
          {isNewsOrArticle(url)}
        </span>
      </div>
      <div className="mt-4 space-y-2 md:mt-14 md:ml-2 md:flex md:space-x-4 md:space-y-0">
        {content.length > 0 ? (
          content.map(item => renderContentCard(item))
        ) : (
          <p>No related content found.</p>
        )}
      </div>
    </Container>
  );
};

export default RelatedNewsAndArticles;
