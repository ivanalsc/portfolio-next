"use client"

import { useState, useRef, useEffect } from "react"
import { RefreshCw, Pause, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import YouTubePlayer from "./youtube-player"

interface Album {
  id: string
  title: string
  artist: string
  coverUrl: string
  youtubeId: string
  song: string
}

const albums: Album[] = [
    {
        id: "1",
        title: "Stadium Arcadium",
        artist: "Red Hot Chili Peppers",
        coverUrl: "/stadium-arcadium.webp",
        youtubeId: "C2-CWmRuE9s?si=TKnIw-M7Mnxhz-m_",
        song: "Dani California",
    },
    {
        id: "2",
        title: "Strange Days",
        artist: "The Doors",
        coverUrl: "/doors.jpg",
        youtubeId: "nOJSmXSFCWk?si=5FZP-PmQ0R-ZmsxM",
        song: "When the music's over",
    },
    {
        id: "3",
        title: "Sticky Fingers",
        artist: "The Rolling Stones",
        coverUrl: "/sticky-fingers.webp",
        youtubeId: "nkQ0LhcTNsY?si=l0gjBaKjYT79bWvf",
        song: "Can't you hear me knocking",
    },
    {
        id: "4",
        title: "Currents",
        artist: "Tame Impala",
        coverUrl: "/currents.jpg",
        youtubeId: "2SUwOgmvzK4?si=sPO3ea3-Zf9JqWF4",
        song: "The less I know the better",
    },
    {
        id: "5",
        title: "AM",
        artist: "Arctic Monkeys",
        coverUrl: "/am.jpg",
        youtubeId: "8-LewaeKejM?si=V53fXTky7QqQCY_G",
        song: "Fireside",
    },
    {
        id: "6",
        title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        artist: "David Bowie",
        coverUrl: "/bowie.jpg",
        youtubeId: "h9tPn70Hq8Y?si=6_ww7lUzOwswUfgU",
        song: "Starman",
    },
    {
        id: "7",
        title: "Ten",
        artist: "Pearl Jam",
        coverUrl: "/pearl-jam.jpg",
        youtubeId: "tkbgtVFlyCQ?si=Bys2nyfWNqlLuK2S",
        song: "Even flow",
    },
]

export default function MusicAlbumShowcase() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timer, setTimer] = useState("0:00")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [seconds, setSeconds] = useState(0)

  const handleAlbumClick = (album: Album) => {
    if (selectedAlbum?.id === album.id) {
      // Toggle play/pause if same album
      setIsPlaying(!isPlaying)
    } else {
      // Select new album and start playing
      setSelectedAlbum(album)
      setIsPlaying(true)
      setSeconds(0)
      setTimer("0:00")
    }
  }

  const refreshAlbums = () => {
    setSelectedAlbum(null)
    setIsPlaying(false)
    setSeconds(0)
    setTimer("0:00")
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          const newSeconds = prev + 1
          const minutes = Math.floor(newSeconds / 60)
          const remainingSeconds = newSeconds % 60
          setTimer(`${minutes}:${remainingSeconds.toString().padStart(2, "0")}`)
          return newSeconds
        })
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  return (
    <div className="w-full backdrop-blur-lg rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 >Don't leave without listening to an awesome track!</h2>
      
      </div>

      {selectedAlbum && (
        <div className="mb-4 bg-white/10 rounded-lg px-4 py-2 inline-block">
          {selectedAlbum.artist} - {selectedAlbum.title} - {selectedAlbum.song}
        </div>
      )}

      <div className="relative h-48">
        <div className="absolute inset-0">
          {albums.map((album, index) => {

            const rotateValue = index % 2 === 0 ? Math.random() * 6 - 3 : Math.random() * -6 + 3;
            const leftOffset = 20 + (index * 40); 
            
            return (
              <motion.div
                key={album.id}
                onClick={() => handleAlbumClick(album)}
                className="absolute cursor-pointer rounded-xl overflow-hidden shadow-lg"
                style={{
                  left: `${leftOffset}px`,
                  top: `${Math.random() * 20}px`,
                  transformOrigin: "center bottom",
                }}
                initial={{
                  rotate: rotateValue,
                  zIndex: albums.length - index,
                }}
                animate={{
                  rotate: selectedAlbum?.id === album.id ? 0 : rotateValue,
                  scale: selectedAlbum?.id === album.id ? 1.2 : 1,
                  y: selectedAlbum?.id === album.id ? -20 : 0,
                  zIndex: selectedAlbum?.id === album.id ? 50 : albums.length - index,
                  transition: { duration: 0.3 }
                }}
                whileHover={{
                  scale: 1.15,
                  y: -15,
                  zIndex: 40,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 relative">
                  <img
                    src={album.coverUrl || "/placeholder.svg"}
                    alt={`${album.artist} - ${album.title}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {selectedAlbum?.id === album.id && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      {isPlaying ? <Pause className="text-white" size={24} /> : <Play className="text-white" size={24} />}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Player controls */}
        <div className="absolute bottom-0 left-0 bg-black/70 text-white px-4 py-1 rounded-lg flex items-center gap-2">
          {isPlaying ? (
            <Pause size={18} className="cursor-pointer" onClick={() => setIsPlaying(false)} />
          ) : (
            <Play size={18} className="cursor-pointer" onClick={() => setIsPlaying(true)} />
          )}
          <span>{timer}</span>
        </div>
      </div>

      {/* YouTube Player */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <YouTubePlayer
              videoId={selectedAlbum.youtubeId}
              isPlaying={isPlaying}
              onStateChange={(state) => {
                if (state === 1) setIsPlaying(true)
                if (state === 2) setIsPlaying(false)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}