'use client';

import FadeIn from '@/components/animations/FadeIn';
import BrandSticker from '@/components/effects/BrandSticker';
import EditableText from '@/components/edit/EditableText';

export default function ManifestoSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    backgroundImage = null,
    overlayOpacity = 0.6,
  } = config;

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-white" style={{ opacity: overlayOpacity }} />
        </div>
      )}

      <div className="max-w-6xl w-full text-center relative z-10">
        <FadeIn delay={0.2} duration={1.0}>
          <p className={`text-5xl md:text-7xl lg:text-hero font-bold ${textColor} leading-[0.9] lg:leading-[0.85] mb-4 md:mb-6 lg:mb-10 relative whitespace-pre-line`}>
            {content.accentDot && content.statement.endsWith('.')
              ? <>{content.statement.slice(0, -1)}<span className="text-ant-green">.</span></>
              : content.statement
            }
          </p>
        </FadeIn>

        {content.subtitle && (
          content.subtitle.includes('\n') ? (
            <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
              {content.subtitle.split('\n').filter(line => line.trim()).map((line, index) => (
                <FadeIn key={index} delay={0.6 + index * 0.15} duration={0.8}>
                  <EditableText
                    slideId={slide?.id}
                    path="content.subtitle"
                    value={content.subtitle}
                    as="p"
                    multiline={true}
                    className={`text-xl md:text-3xl lg:text-4xl ${textColor} opacity-80 font-medium leading-tight text-center`}
                  >
                    {line}
                  </EditableText>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn delay={0.6} duration={1}>
              <EditableText
                slideId={slide?.id}
                path="content.subtitle"
                value={content.subtitle}
                as="p"
                className={`text-xl md:text-3xl lg:text-4xl ${textColor} opacity-70 font-medium tracking-wide`}
              >
                {content.subtitle}
              </EditableText>
            </FadeIn>
          )
        )}
      </div>

      {content.sticker && (
        <BrandSticker
          name={content.sticker.name}
          image={content.sticker.image}
          variant="accent"
          position={content.sticker.position || 'bottom-right'}
          rotation={content.sticker.rotation || 0}
          size={content.sticker.size || 'md'}
        />
      )}
    </div>
  );
}
