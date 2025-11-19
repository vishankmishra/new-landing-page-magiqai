"use client";

import { useEffect, useRef, useState } from "react";

interface YouTubePlayerProps {
  videoId: string;
  className?: string;
  defaultSpeed?: number;
}

export default function YouTubePlayer({
  videoId,
  className = "",
  defaultSpeed = 1.5,
}: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    const onYouTubeIframeAPIReady = () => {
      if (containerRef.current && !playerRef.current && window.YT) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            playsinline: 1,
          },
          events: {
            onReady: (event: YT.PlayerEvent) => {
              setIsLoaded(true);
              const player = event.target;
              // Set playback speed to 2x
              player.setPlaybackRate(defaultSpeed);
              // Set quality to highres (1080p)
              player.setPlaybackQuality("highres");
            },
            onStateChange: (event: YT.OnStateChangeEvent) => {
              // Maintain playback speed when video plays
              if (event.data === window.YT.PlayerState.PLAYING) {
                event.target.setPlaybackRate(defaultSpeed);
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId, defaultSpeed]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full h-full rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/50 overflow-hidden bg-black">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="text-white text-sm">Loading video...</div>
          </div>
        )}
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </div>
  );
}

// YouTube API Types
declare namespace YT {
  class Player {
    constructor(
      elementId: string | HTMLElement,
      options: {
        videoId?: string;
        playerVars?: {
          autoplay?: number;
          controls?: number;
          rel?: number;
          modestbranding?: number;
          iv_load_policy?: number;
          playsinline?: number;
        };
        events?: {
          onReady?: (event: PlayerEvent) => void;
          onStateChange?: (event: OnStateChangeEvent) => void;
        };
      }
    );
    setPlaybackRate(rate: number): void;
    setPlaybackQuality(suggestedQuality: string): void;
    destroy(): void;
  }

  interface PlayerEvent {
    target: Player;
  }

  interface OnStateChangeEvent {
    data: number;
    target: Player;
  }

  enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5,
  }
}

declare global {
  interface Window {
    YT: {
      Player: typeof YT.Player;
      PlayerState: typeof YT.PlayerState;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}
