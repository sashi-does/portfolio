"use client";

// clauding
import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startAt = 30;

  const togglePlay = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      if (audio.currentTime < startAt) {
        audio.currentTime = startAt;
      }
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      const audio = audioRef.current as HTMLAudioElement | null;
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div
      className="fixed w-[280px] bottom-6 right-6 z-50 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      <div
        className={`
        relative overflow-hidden
        bg-gray-900/95 backdrop-blur-xl 
        border border-gray-700/50
        rounded-2xl shadow-2xl
        transition-all duration-500 ease-out
        
        ${
          isPlaying
            ? "shadow-2xl shadow-orange-400/30 border-orange-500/30"
            : ""
        }
      `}
      >
        <div className="absolute inset-0 bg-gray-800/20 rounded-2xl" />

        <div className="relative px-4 py-3 flex items-center gap-3">
          <div
            className={`
            relative w-10 h-10 rounded-full overflow-hidden
            bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900
            border-2 border-slate-600
            shadow-inner
            transition-transform duration-300
            ${isHovered ? "scale-110" : "scale-100"}
            ${isPlaying ? "animate-spin" : ""}
          `}
            style={{
              animationDuration: isPlaying ? "4s" : "0s",
            }}
          >
            <Image
              src="/angels.png"
              alt="cover"
              width={1920}
              height={1080}
              className="!h-full !w-full object-cover"
            />

            <div className="absolute inset-0.5 border border-slate-500/50 rounded-full" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-900 rounded-full border border-slate-500" />

            <div
              className={`
              absolute inset-0 rounded-full
              bg-gradient-to-r from-transparent via-white/40 to-transparent
              w-0.5 h-full
              ${isPlaying ? "animate-spin" : "opacity-0"}
            `}
              style={{
                animationDuration: isPlaying ? "2s" : "0s",
                transformOrigin: "center",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            <div
              className={`
              absolute top-1 right-2 w-2 h-1
              bg-white/30 rounded-full blur-sm
              ${isPlaying ? "animate-pulse" : "opacity-60"}
            `}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="space-y-1">
              <div
                className={`
                text-gray-300 font-medium text-xs
                transition-all duration-300 mb-0
                ${isHovered ? "translate-x-1 text-white" : "translate-x-0"}
                `}
              >
                <h1>Angels – Khalid</h1>
              </div>

              <span className="text-gray-400 text-[11px]">
                Meanwhile hear this!
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`
                    w-1 h-1 rounded-full bg-gray-400
                    transition-all duration-300
                    ${isPlaying ? "bg-orange-400" : "bg-gray-400"}
                  `}
                  style={{
                    animationDelay: `${i * 150}ms`,
                    opacity: isPlaying ? 0.4 + (i % 3) * 0.2 : 0.6,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className={`
            w-8 h-8 rounded-full 
            bg-gray-800/80 backdrop-blur-sm
            flex items-center justify-center
            transition-all duration-300
            ${isHovered ? "bg-orange-500/80 scale-110" : "bg-gray-800/80"}
            ${isPlaying ? "bg-orange-500/90" : ""}
          `}
          >
            {isPlaying ? (
              <Pause size={14} className="text-white" />
            ) : (
              <Play size={14} className="text-white ml-0.5" />
            )}
          </div>
        </div>

        <div
          className={`
          absolute bottom-0 left-0 h-0.5
          bg-orange-400
          transition-all duration-700
          ${isPlaying ? "w-full" : "w-0"}
        `}
        />
      </div>

      <div
        className={`
        absolute inset-0 rounded-2xl
        bg-orange-500/20 blur-xl -z-10
        transition-opacity duration-500
        ${isHovered || isPlaying ? "opacity-100" : "opacity-0"}
      `}
      />

      <audio ref={audioRef} src="/angels.mp3" loop preload="auto" />
    </div>
  );
}
