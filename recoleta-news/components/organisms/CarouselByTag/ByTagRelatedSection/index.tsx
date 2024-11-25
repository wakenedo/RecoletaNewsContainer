import Container from '@/components/atoms/Container';
import { FC } from 'react';

interface ByTagRelatedSectionProps {
  isFlexRowReverse?: boolean;
}

const ByTagRelatedSection: FC<ByTagRelatedSectionProps> = ({
  isFlexRowReverse = false,
}) => {
  return (
    <Container width="md:w-2/4" roundedCorners="" applyMask={false}>
      <div
        className={`mt-2 md:mt-0 flex-col space-y-7  ${isFlexRowReverse ? 'pr-0 md:pr-4' : 'md:pl-4'}`}
      >
        <Container
          roundedCorners=""
          applyBorder={true}
          applyMask={false}
          solidBackground={true}
          applyShadowEffect={true}
          shadowEffect="shadow-lg"
          additionalTWStyles="px-2 py-3"
          height="2xl:h-[339px] xl:h-[272px] lg:h-[236px] md:h-[184px] sm:h-[250px] h-[200px]"
        >
          <Container
            applyMask={false}
            additionalTWStyles="px-4 xl:text-heading-small font-semibold"
          >
            Container 1: Conteúdo Relacionado - Lorem Ipsum Doret Amenos
          </Container>
        </Container>

        <Container
          roundedCorners=""
          applyBorder={true}
          applyMask={false}
          solidBackground={true}
          applyShadowEffect={true}
          shadowEffect="shadow-lg"
          additionalTWStyles="px-2 py-3"
          height="2xl:h-[339px] xl:h-[272px] lg:h-[236px] md:h-[184px] sm:h-[250px] h-[200px]"
        >
          <Container
            applyMask={false}
            additionalTWStyles="px-4 xl:text-heading-small font-semibold"
          >
            Container 2: Conteúdo Relacionado - Lorem Ipsum Doret Amenos
          </Container>
        </Container>
        <Container
          roundedCorners=""
          applyBorder={true}
          applyMask={false}
          solidBackground={true}
          applyShadowEffect={true}
          shadowEffect="shadow-lg"
          additionalTWStyles="px-2 py-3"
          height="2xl:h-[339px] xl:h-[272px] lg:h-[236px] md:h-[184px] sm:h-[250px] h-[200px]"
        >
          <Container
            applyMask={false}
            additionalTWStyles="px-4 xl:text-heading-small font-semibold"
          >
            Container 3: Conteúdo Relacionado - Lorem Ipsum Doret Amenos
          </Container>
        </Container>
      </div>
    </Container>
  );
};

export default ByTagRelatedSection;
