import { useRouter } from 'next/router';
import useFetchSingleContent from '@/hooks/useFetchSingleContent';
import '../../app/globals.css';
import { NextPage } from 'next';
import { getTestTagStyles, Tag } from '@/utils/tagUtils';
import Image from 'next/image';
import ContentTitle from '@/components/molecules/ContentTitle';
import WrittenByAndDate from '@/components/molecules/WrittenByAndDate';
import TagStripes from '@/components/molecules/TagStripes';
import RelatedNewsAndArticles from '@/components/organisms/RelatedNewsAndArticles';
import ContentBanner from '@/components/organisms/ContentBanner';
import Header from '@/components/organisms/Header';
import Container from '@/components/atoms/Container';

const SingleArticle: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const url = 'articles';

  const {
    content: article,
    loading,
    error,
  } = useFetchSingleContent('articles', id as string);

  if (!id) return <div>Loading...</div>;

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!article) return <div>Article not found.</div>;

  const isMultiTag = article.isMultitag;

  const tags = article.isMultitag
    ? article.tags.map(tag => tag.name)
    : [article.tag];

  const { colors } = getTestTagStyles(
    isMultiTag ? (tags as Tag[]) : [],
    !isMultiTag ? (tags as unknown as Tag) : 'Governancia'
  );

  const imageToRender =
    article.isMultiImage && article.images?.length > 0
      ? article.images[0].src
      : article.image || 'https://placehold.it/1250x2200';

  return (
    <>
      <Header />
      <main className="px-2">
        <div className="space-y-1">
          <div className="mt-2">
            <Image
              src={imageToRender}
              alt={article.title}
              className="w-full 2xl:h-[705px] lg:h-[600px] md:h-[500px] sm:h-[400px] h-[300px] object-cover"
              width={1440}
              height={600}
            />
          </div>
          <Container
            solidBackground
            applyMask={false}
            backgroundColor="#FF9A51"
            roundedCorners=""
            additionalTWStyles="justify-center p-1"
          >
            <Container
              applyMask={false}
              solidBackground
              backgroundColor="#fdfdfd"
              additionalTWStyles="space-y-2 md:w-[800px] m-auto p-2 px-4"
              roundedCorners=""
            >
              <div className="m-auto flex-col font-sans">
                <ContentTitle contentItem={article} />
                <WrittenByAndDate contentItem={article} />
              </div>
              <div className="font-serif max-w-[810px] m-auto">
                <div className="mt-20 mb-10"></div>
                <TagStripes colors={colors} width="w-10" />
              </div>
            </Container>
          </Container>
          <ContentBanner
            id="helpUs-cta-content-banner"
            ctaText="Ajude o ReColeta"
            height="h-[132px]"
            ctaTextColor="text-recoleta_primary_orange"
            isBackgroundImage={true}
            imagePath="/image/Sustainability.jpg"
            isBannerWithButton={true}
            buttonText="Saiba Mais"
            btnDisabled={false}
            btnBgColor="bg-[#FF7C1E] "
            btnTextColor="text-[#5d2700]"
            btnHoverBgColor="hover:bg-[#DB5C00]"
            btnHoverTextColor="hover:text-[#FF9A51]"
            btnActiveShadow="shadow-lg"
            btnClassName="md:w-[250px] mx-1 w-[200px] md:py-[12px]"
            roundedCorners=""
          />
          <div>
            <RelatedNewsAndArticles
              url={url}
              tags={tags as unknown as Tag[]}
              excludeId={id as string}
            />
          </div>
        </div>
        <footer></footer>
      </main>
    </>
  );
};

export default SingleArticle;
