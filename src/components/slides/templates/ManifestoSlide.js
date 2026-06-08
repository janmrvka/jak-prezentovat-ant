'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import BrandSticker from '@/components/effects/BrandSticker';
import EditableText from '@/components/edit/EditableText';

export default function ManifestoSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    backgroundImage = null,
    overlayOpacity = 0.6,
    clickShrink = false,
  } = config;

  const [shrunk, setShrunk] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
      onClick={clickShrink ? () => setShrunk(s => !s) : undefined}
      style={clickShrink ? { cursor: 'pointer' } : undefined}
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
          <motion.p
            animate={clickShrink ? { fontSize: shrunk ? '2rem' : undefined, opacity: shrunk ? 0.3 : 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`text-5xl md:text-7xl lg:text-hero font-bold ${textColor} leading-[0.9] lg:leading-[0.85] mb-4 md:mb-6 lg:mb-10 relative whitespace-pre-line`}
          >
            {content.accentDot && content.statement.endsWith('.')
              ? <>{content.statement.slice(0, -1)}<span className="text-ant-green">.</span></>
              : content.statement
            }
          </motion.p>
        </FadeIn>

        {content.subtitle && (
          content.subtitle.includes('\n') ? (
            <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
              {content.subtitle.split('\n').filter(line => line.trim()).map((line, index) => (
                <FadeIn key={index} delay={0.6 + index * 0.15} duration={0.8}>
                  <motion.p
                    animate={clickShrink ? { scale: shrunk ? 0.4 : 1, opacity: shrunk ? 0.3 : 0.8 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-3xl md:text-5xl lg:text-6xl ${textColor} opacity-80 font-bold leading-tight text-center`}
                  >
                    {line}
                  </motion.p>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn delay={0.6} duration={1}>
              <motion.p
                animate={clickShrink ? { scale: shrunk ? 0.4 : 1, opacity: shrunk ? 0.3 : 0.8 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`text-3xl md:text-5xl lg:text-6xl ${textColor} opacity-80 font-bold tracking-wide`}
              >
                {content.subtitle}
              </motion.p>
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
