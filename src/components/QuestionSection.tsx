import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import confetti from "canvas-confetti";

const noMessages = [
  "Please dobara soch le... kuch log bohot special hote hain 🤍",
  "Tujhe khona option mein hi nahi hai 💛",
  "Warning: Ek innocent dil hurt ho jayega 🥺",
];

const QuestionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [answered, setAnswered] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noIdx, setNoIdx] = useState(-1);

  const moveNo = useCallback(() => {
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 150;
    setNoPos({ x, y });
    setNoIdx((prev) => Math.min(prev + 1, noMessages.length - 1));
  }, []);

  const handleYes = () => {
    setAnswered(true);
    // Heart confetti
    const heart = confetti.shapeFromText({ text: "❤️", scalar: 2 });
    confetti({
      shapes: [heart],
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      scalar: 2,
    });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 120,
        origin: { y: 0.5 },
        colors: ["#e8956a", "#d4a574", "#f0c87a", "#fff"],
      });
    }, 400);
  };

  return (
    <section ref={ref} className="section-spacing flex items-center justify-center min-h-screen">
      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="question"
            className="glass-card p-10 md:p-16 max-w-lg text-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            style={{ boxShadow: "0 0 60px hsla(25,90%,55%,0.08)" }}
          >
            <p className="font-body text-sm text-muted-foreground mb-3">
              Bas ek baat puchni thi...
            </p>
            <p className="font-display text-2xl md:text-3xl text-foreground mb-10">
              Kya tu mere saath aise hi hamesha rahegi? 🤍
            </p>

            <div className="flex items-center justify-center gap-6 relative">
              <motion.button
                className="glow-button text-base"
                onClick={handleYes}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                YES 🤍
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-full font-body font-semibold text-base border border-border text-muted-foreground transition-colors hover:border-primary/30"
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onHoverStart={moveNo}
                onClick={moveNo}
              >
                NO 🙈
              </motion.button>
            </div>

            <AnimatePresence>
              {noIdx >= 0 && (
                <motion.p
                  key={noIdx}
                  className="mt-8 font-body text-sm text-primary/80 italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {noMessages[noIdx]}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            className="text-center max-w-lg px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p
              className="font-display text-4xl md:text-6xl text-gradient mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Thank You...
            </motion.p>
            <motion.p
              className="font-body text-base md:text-lg text-foreground/75 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Mere saath rehne ke liye,
              <br />
              Mujhe samajhne ke liye,
              <br />
              Aur meri life ka itna khoobsurat part hone ke liye 🤍
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default QuestionSection;
