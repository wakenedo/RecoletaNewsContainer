import type { Metadata } from 'next';
import './globals.css';
import { ScreenSizeProvider } from './context/ScreenSizeProvider';

export const metadata: Metadata = {
  title: 'Recoleta News - O seu portal de notícias sobre sustentabilidade',
  description: 'Fique por dentro das últimas notícias sobre sustentabilidade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ScreenSizeProvider>
        <body className={`antialiased`}>
          {children}
          <script
            id="clarity-script"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/osxoa3syfo";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "osxoa3syfo");`,
            }}
          ></script>
        </body>
      </ScreenSizeProvider>
    </html>
  );
}
