import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
  visible: boolean;
}

const LoadingScreen = ({ onComplete, visible }: LoadingScreenProps) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div className="text-center px-6">
            <motion.p
              className="font-script text-2xl md:text-4xl text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Thoda dil se banaya hai...
            </motion.p>
            <motion.p
              className="font-script text-2xl md:text-4xl text-foreground/80 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            >
              thoda himmat se 🤍
            </motion.p>
            <motion.div
              className="mt-10 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
