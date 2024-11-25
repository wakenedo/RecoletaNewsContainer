'use client';
import Carousel from '@/components/organisms/Carousel';
import CarouselByTag from '@/components/organisms/CarouselByTag';
import ContentBanner from '@/components/organisms/ContentBanner';
import Header from '@/components/organisms/Header';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="items-center w-full px-1">
      <Header />
      <main>
        <div>
          <div>
            <Carousel />
            <div className="my-1">
              <ContentBanner
                id="register-cta-content-banner"
                ctaText="Junte-se a nós e venha fazer a diferença!"
                height="h-[132px]"
                btnDisabled={false}
                ctaTextColor="text-recoleta_primary_blue"
                isBackgroundVideo={true}
                videoPath="/videos/teste.mp4"
                btnBgColor="bg-[#4DD8F8]"
                btnHoverBgColor="hover:bg-[#09B0D6]"
                btnTextColor="text-[#005265]"
                btnHoverTextColor="hover:text-[#7EE3FA]"
                isBannerWithButton={true}
                buttonText="Registar Agora"
                btnActiveShadow="shadow-lg"
                btnClassName="md:w-[250px] mx-1 w-[200px] md:py-[12px]"
                roundedCorners=""
              />
            </div>
            <div className="flex-col space-y-2">
              <CarouselByTag
                headerTitle="Governancia"
                headerBgImg="/image/Governance.png"
                isFlexRowReverse={false}
                _tag="Governancia"
              />

              <CarouselByTag
                headerTitle="Sustentabilidade"
                headerBgImg="/image/Sustainability.jpg"
                isFlexRowReverse={true}
                marginAuto="left-0"
                _tag="Sustentabilidade"
              />

              <CarouselByTag
                headerTitle="Sociedade"
                headerBgImg="/image/Society.jpeg"
                isFlexRowReverse={false}
                _tag="Sociedade"
              />
            </div>
            <div className="my-1">
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
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-4"></footer>
    </div>
  );
};

export default Home;
