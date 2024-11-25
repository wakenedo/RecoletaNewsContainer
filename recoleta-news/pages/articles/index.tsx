import useFetchAllContent from '@/hooks/useFetchAllContent';
import { NextPage } from 'next';
import '../../app/globals.css';
import Link from 'next/link';
import Header from '@/components/organisms/Header';
import Container from '@/components/atoms/Container';

const Articles: NextPage = () => {
  const { content: articles, loading, error } = useFetchAllContent('articles');

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!articles.length) return <div>No articles found.</div>;

  return (
    <>
      <Header />
      <div className="px-2">
        <Container
          applyMask={false}
          solidBackground
          backgroundColor="#FF9A51"
          additionalTWStyles="p-4"
        >
          <span
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
              fontWeight: 600,
            }}
            className="text-heading-large text-recoleta_light_gray"
          >
            Articles
          </span>

          <ul className="list-disc ml-4">
            {articles.map(article => (
              <li key={article.id} className="mb-2">
                <Link
                  className="text-body-small text-blue-300 underline hover:text-blue-700"
                  href={`/articles/${article.id}`}
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Articles;
