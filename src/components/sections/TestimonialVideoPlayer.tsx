'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState } from 'react';

const VIDEO_URL = '/videos/Taleer.webm';
const POSTER_URL = '/videos/taleer-testimonial-poster.webp';

export default function TestimonialVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      data-testid="testimonial-video-player"
      className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] bg-slate-950 shadow-[0_35px_90px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/20"
    >
      {isPlaying ? (
        <video
          autoPlay
          controls
          playsInline
          preload="metadata"
          poster={POSTER_URL}
          aria-label="Video testimonial from the CEO of TALEER LLC"
          className="absolute inset-0 h-full w-full bg-black object-contain"
        >
          <source src={VIDEO_URL} type="video/webm" />
          Your browser does not support embedded video.
        </video>
      ) : (
        <>
          <Image
            src={POSTER_URL}
            alt=""
            fill
            sizes="(min-width: 1024px) 370px, (min-width: 640px) 360px, calc(100vw - 64px)"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/20"
          />

          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            55 sec
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play the video testimonial from the CEO of TALEER LLC"
            className="group absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-300"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-600 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <Play aria-hidden="true" className="ml-1 h-8 w-8" fill="currentColor" />
            </span>
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              Client testimonial
            </p>
            <p className="mt-2 text-lg font-semibold text-white">TALEER LLC</p>
          </div>
        </>
      )}
    </div>
  );
}
