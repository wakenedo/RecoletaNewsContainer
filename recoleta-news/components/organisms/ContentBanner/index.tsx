import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import { FC } from 'react';

export interface ContentBannerProps {
  id: string;
  height: string;
  isBackgroundVideo?: boolean;
  videoPath?: string;
  isBackgroundImage?: boolean;
  imagePath?: string;
  ctaText: string;
  limitCtaTextWidth?: boolean;
  limitedWidth?: string;
  ctaTextColor: string;
  isBannerWithButton?: boolean;
  buttonText?: string;
  redirectUrl?: string;
  btnDisabled?: boolean;
  roundedCorners?: '' | 'rounded';
  btnBgColor?: string;
  btnTextColor?: string;
  btnHoverBgColor?: string;
  btnHoverTextColor?: string;
  btnActiveShadow?: string;
  btnClassName?: string;
}

const ContentBanner: FC<ContentBannerProps> = ({
  id,
  height = 'xl:h-[132px]',
  isBackgroundVideo,
  videoPath,
  isBackgroundImage,
  imagePath = 'https://https://placehold.it/2250x132',
  ctaText = 'Your Text For Banner',
  limitCtaTextWidth = false,
  limitedWidth,
  ctaTextColor = 'text-recoleta_primary_orange',
  isBannerWithButton = false,
  buttonText = 'Button Text',
  redirectUrl = '',
  roundedCorners,
  btnDisabled = false,
  btnBgColor = 'bg-[#FF7C1E]',
  btnTextColor = 'text-[#5d2700]',
  btnHoverBgColor = 'hover:bg-[#DB5C00]',
  btnHoverTextColor = 'hover:text-[#FF9A51]',
  btnActiveShadow = 'shadow-lg',
  btnClassName = 'md:w-[26%] md:h-3/5',
}) => {
  const handleButtonClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <Container
      id={id}
      height={height}
      additionalTWStyles="relative overflow-hidden"
      roundedCorners={roundedCorners}
    >
      {/* Video background */}
      {isBackgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoPath}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {isBackgroundImage && (
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={imagePath}
          alt="background"
        />
      )}

      {/* Content (Text and Button) */}
      <Container
        maskStyle="black"
        maskOpacity={0.7}
        maskDirection="t-b"
        additionalTWStyles="items-center w-screen h-full z-10 justify-center"
      >
        <div
          // Set the responsive flex behavior here
          className="2xl:px-10 px-5 flex flex-col md:flex-row md:justify-between w-screen "
        >
          {/* CTA Text */}
          <div
            className={`${ctaTextColor} text-center font-bold md:text-4xl text-3xl select-none ${limitCtaTextWidth ? limitedWidth : ''} z-20`}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            <span>{ctaText}</span>
          </div>

          {/* Button */}
          <div className="md:py-0 py-2 flex justify-center">
            {isBannerWithButton && (
              <Button
                onClick={handleButtonClick}
                disabled={btnDisabled}
                bgColor={btnBgColor}
                textColor={btnTextColor}
                hoverBgColor={btnHoverBgColor}
                hoverTextColor={btnHoverTextColor}
                activeShadow={btnActiveShadow}
                className={btnClassName}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ContentBanner;
