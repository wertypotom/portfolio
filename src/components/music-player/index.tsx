import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, X, Music } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  url: string;
}

const playlist: Song[] = [
  {
    title: `Wonderful Tonight`,
    artist: 'Boyce Avenue',
    url: `/assets/music/Wonderful Tonight - Boyce Avenue.mp3`,
  },
  {
    title: 'Rockabye',
    artist: 'The Mayries',
    url: '/assets/music/Rockabye - Acoustic Version - The Mayries.mp3',
  },
  {
    title: 'Save Tonight',
    artist: 'Tom Speight',
    url: '/assets/music/Save Tonight - Tom Speight.mp3',
  },
  {
    title: 'Time After Time',
    artist: 'Boyce Avenue',
    url: '/assets/music/Time After Time - Boyce Avenue.mp3',
  },
];

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentSongIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length,
    );
    setIsPlaying(true);
  };

  const handleSongEnd = () => {
    playNext();
  };

  return (
    <>
      {/* Full Player */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              top: isScrolled ? 110 : 80,
            }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed left-1/2 -translate-x-1/2 z-30'
          >
            <div className='flex items-center gap-2 md:gap-4 px-3 md:px-6 py-2 md:py-3 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200 w-[340px] md:w-[420px]'>
              {/* Song Info */}
              <div className='flex items-center gap-2 md:gap-3 flex-1 min-w-0'>
                {/* Sound Animation */}
                <div className='flex items-center gap-0.5 h-4 md:h-6 flex-shrink-0'>
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='w-0.5 md:w-1 bg-orange-500 rounded-full'
                      animate={{
                        height: isPlaying
                          ? ['6px', '16px', '10px', '16px']
                          : '6px',
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>

                <div className='text-left min-w-0 flex-1'>
                  <p className='text-xs md:text-sm font-semibold text-gray-900 truncate'>
                    {currentSong.title}
                  </p>
                  <p className='text-[10px] md:text-xs text-gray-500 truncate'>
                    {currentSong.artist}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className='flex items-center gap-1 md:gap-2 flex-shrink-0'>
                <button
                  onClick={playPrevious}
                  className='p-1 md:p-2 text-gray-700 hover:text-orange-500 transition-colors rounded-full hover:bg-orange-50'
                  aria-label='Previous song'
                >
                  <SkipBack size={16} className='md:w-[18px] md:h-[18px]' />
                </button>

                <button
                  onClick={togglePlay}
                  className='p-1.5 md:p-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all hover:scale-110 shadow-md'
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause size={16} className='md:w-[18px] md:h-[18px]' />
                  ) : (
                    <Play
                      size={16}
                      className='ml-0.5 md:w-[18px] md:h-[18px]'
                    />
                  )}
                </button>

                <button
                  onClick={playNext}
                  className='p-1 md:p-2 text-gray-700 hover:text-orange-500 transition-colors rounded-full hover:bg-orange-50'
                  aria-label='Next song'
                >
                  <SkipForward size={16} className='md:w-[18px] md:h-[18px]' />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className='p-1 md:p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100 flex-shrink-0'
                aria-label='Close player'
              >
                <X size={16} className='md:w-[18px] md:h-[18px]' />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button when hidden */}
      <AnimatePresence>
        {!isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              top: isScrolled ? 120 : 96,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={() => setIsVisible(true)}
            className='fixed left-6 z-30 p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all hover:scale-110 group'
            aria-label='Open music player'
          >
            <div className='relative'>
              <Music size={24} />
              {/* Pulsing indicator when playing */}
              {isPlaying && (
                <motion.div
                  className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white'
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentSong.url}
        onEnded={handleSongEnd}
        preload='metadata'
      />
    </>
  );
};
