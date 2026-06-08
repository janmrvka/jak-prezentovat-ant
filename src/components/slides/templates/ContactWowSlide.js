'use client';

import FadeIn from '@/components/animations/FadeIn';
import BrandSticker from '@/components/effects/BrandSticker';

export default function ContactWowSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    accentColor = 'text-ant-green',
  } = config;

  const { title, subtitle, contactEmail, contactPhone, website, sticker } = content;

  return (
    <div
      className={`min-h-screen ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden flex items-center justify-center`}
    >
      <div className="relative z-10 text-center max-w-4xl">
        {title && (
          <FadeIn delay={0.2}>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${textColor} mb-6 md:mb-8`}>
              {title}
            </h1>
          </FadeIn>
        )}

        {(subtitle || website) && (
          <FadeIn delay={0.5}>
            <p className={`text-2xl md:text-3xl lg:text-4xl ${accentColor} font-semibold`}>
              {subtitle || website}
            </p>
          </FadeIn>
        )}

        {(contactEmail || contactPhone) && (
          <FadeIn delay={0.8}>
            <div className={`mt-8 md:mt-12 ${textColor} opacity-70 text-lg md:text-xl space-y-2`}>
              {contactEmail && <p>{contactEmail}</p>}
              {contactPhone && <p>{contactPhone}</p>}
            </div>
          </FadeIn>
        )}
      </div>

      <BrandSticker
        name={sticker?.name}
        image={sticker?.image}
        text={sticker?.text}
        variant="accent"
        position={sticker?.position || 'top-right'}
        rotation={sticker?.rotation ?? 20}
        size={sticker?.size || 'md'}
      />
    </div>
  );
}
