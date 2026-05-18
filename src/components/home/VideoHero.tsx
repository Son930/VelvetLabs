import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { fadeUp, motionInitial, staggerContainer } from '../../lib/motion'

function inferVideoMimeType(src: string, explicit?: string) {
  if (explicit) return explicit
  if (src.endsWith('.webm')) return 'video/webm'
  if (src.endsWith('.ogg') || src.endsWith('.ogv')) return 'video/ogg'
  return 'video/mp4'
}

type VideoHeroProps = {
  videoSrc: string
  videoType?: string
  /** MP4 (or other) fallback when WebM is unsupported */
  fallbackSrc?: string
  posterSrc?: string
  minHeight?: string
  children: ReactNode
  align?: 'bottom-left' | 'center'
}

export function VideoHero({
  videoSrc,
  videoType,
  fallbackSrc,
  posterSrc,
  minHeight = 'min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh]',
  children,
  align = 'bottom-left',
}: VideoHeroProps) {
  const reduceMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const primaryType = inferVideoMimeType(videoSrc, videoType)

  useEffect(() => {
    if (reduceMotion) return
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [reduceMotion, videoSrc])

  const alignClass =
    align === 'center'
      ? 'items-center justify-center text-center'
      : 'items-end justify-start text-left'

  return (
    <article
      className={`relative w-full overflow-hidden rounded-none ${minHeight} flex ${alignClass}`}
    >
      {reduceMotion && posterSrc ? (
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          aria-hidden
        >
          <source src={videoSrc} type={primaryType} />
          {fallbackSrc ? (
            <source src={fallbackSrc} type="video/mp4" />
          ) : null}
        </video>
      )}

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className={`relative z-10 w-full p-8 sm:p-12 lg:p-16 lg:pb-20 ${align === 'center' ? 'max-w-3xl' : ''}`}
        initial={motionInitial(reduceMotion)}
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>{children}</motion.div>
      </motion.div>
    </article>
  )
}
