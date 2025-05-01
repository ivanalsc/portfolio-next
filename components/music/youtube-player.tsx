"use client"

import { useEffect, useRef, useState } from "react"

interface YouTubePlayerProps {
  videoId: string
  isPlaying: boolean
  onStateChange?: (state: number) => void
}

declare global {
  interface Window {
    YT: {
      Player: any
      PlayerState: {
        PLAYING: number
        PAUSED: number
      }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

export default function YouTubePlayer({ videoId, isPlaying, onStateChange }: YouTubePlayerProps) {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [playerReady, setPlayerReady] = useState(false)
  const [currentVideoId, setCurrentVideoId] = useState(videoId)

  // Load YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer(videoId)
      }
    } else {
      initializePlayer(videoId)
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
        setPlayerReady(false)
      }
    }
  }, []) // Only run once on mount

  // Handle video ID changes
  useEffect(() => {
    if (videoId !== currentVideoId) {
      setCurrentVideoId(videoId)
      setPlayerReady(false)

      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }

      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        initializePlayer(videoId)
      }, 100)
    }
  }, [videoId, currentVideoId])

  // Handle play/pause
  useEffect(() => {
    if (playerReady && playerRef.current) {
      try {
        if (isPlaying) {
          playerRef.current.playVideo()
        } else {
          playerRef.current.pauseVideo()
        }
      } catch (error) {
        console.error("YouTube player error:", error)
      }
    }
  }, [isPlaying, playerReady])

  const initializePlayer = (videoId: string) => {
    if (!containerRef.current || !window.YT || !window.YT.Player) {
      // If YouTube API is not ready yet, try again in 100ms
      setTimeout(() => initializePlayer(videoId), 100)
      return
    }

    try {
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: isPlaying ? 1 : 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: () => {
            setPlayerReady(true)
            if (isPlaying && playerRef.current) {
              playerRef.current.playVideo()
            }
          },
          onStateChange: (event: any) => {
            if (onStateChange) {
              onStateChange(event.data)
            }
          },
        },
      })
    } catch (error) {
      console.error("Error initializing YouTube player:", error)
    }
  }

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden">
      <div ref={containerRef} id={`youtube-player-${videoId}`} className="w-full h-full" />
    </div>
  )
}
