import useFetchAllContent from '@/hooks/useFetchAllContent';
import { NextPage } from 'next';
import Link from 'next/link';
import '../../app/globals.css';
import Header from '@/components/organisms/Header';
import Container from '@/components/atoms/Container';
import { Image } from '@nextui-org/react';

const News: NextPage = () => {
  const { content: news, loading, error } = useFetchAllContent('news');

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!news.length) return <div>No news found.</div>;

  console.log(news.map(newsItem => newsItem.tags));

  return (
    <>
      <Header />
      <div className="px-2">
        <Container
          applyMask={false}
          solidBackground
          backgroundColor="#A6FA7E"
          additionalTWStyles="p-4"
        >
          <span
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
              fontWeight: 600,
            }}
            className="text-heading-large text-recoleta_light_gray"
          >
            Notícias
          </span>
          <ul className="list-disc ml-4">
            {' '}
            {/* Add list-disc and ml-4 for bullets */}
            {news.map(newsItem => (
              <li key={newsItem.id} className="mb-2">
                <Link
                  className="text-body-small text-blue-300 underline hover:text-blue-700"
                  href={`/news/${newsItem.id}`}
                >
                  {newsItem.title}
                </Link>{' '}
                {newsItem.postedAt.day}-{newsItem.postedAt.month}-
                {newsItem.postedAt.year}:{newsItem.postedAt.time}
              </li>
            ))}
          </ul>
          <Image />
        </Container>
      </div>
    </>
  );
};

export default News;
