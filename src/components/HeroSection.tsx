import { motion } from "framer-motion";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-lg">
        <motion.p
          className="font-display text-5xl md:text-7xl font-medium text-gradient mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hey...
        </motion.p>

        <motion.p
          className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Mujhe pata hai shayad main words mein utna acha nahi hoon...
        </motion.p>

        <motion.p
          className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          But kuch baatein dil mein thi jo tujhe batani thi 💛
        </motion.p>

        <motion.button
          className="glow-button"
          onClick={onEnter}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Enter Kar Na... 🫶
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
