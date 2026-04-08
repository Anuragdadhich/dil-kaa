import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import ShayariIntro from "@/components/ShayariIntro";
import DistanceSection from "@/components/DistanceSection";
import ApologySection from "@/components/ApologySection";
import MemoriesSection from "@/components/MemoriesSection";
import ShayariSection from "@/components/ShayariSection";
import QuestionSection from "@/components/QuestionSection";
import EndingSection from "@/components/EndingSection";
import MusicToggle from "@/components/MusicToggle";
import CursorEffects from "@/components/CursorEffects";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingParticles />
      <CursorEffects />
      <MusicToggle />

      <LoadingScreen visible={loading} onComplete={() => {}} />

      <AnimatePresence>
        {!loading && !entered && (
          <motion.div
            key="hero"
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection onEnter={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ShayariIntro />
          <DistanceSection />
          <ApologySection />
          <MemoriesSection />
          <ShayariSection />
          <QuestionSection />
          <EndingSection />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
