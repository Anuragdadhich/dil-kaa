import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element - user can replace src later
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.4;
    // Placeholder: replace this URL with your "Dil Ka Rishta" song file
    // Place your song file in /public/music/song.mp3
    audio.src = "Dil Ka Rishta_320(PagaiWorld (mp3cut.net).mp3";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center glass-card border-primary/20"
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={playing ? { boxShadow: "0 0 20px hsla(25,90%,55%,0.3)" } : {}}
      title={playing ? "Pause Music" : "Play Music"}
    >
      {playing ? (
        <Music size={18} className="text-primary" />
      ) : (
        <VolumeX size={18} className="text-muted-foreground" />
      )}
    </motion.button>
  );
};

export default MusicToggle;
