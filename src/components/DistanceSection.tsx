import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Jab maine Instagram deactivate kiya tha...",
  "Jab main thoda door sa ho gaya tha...",
  "Ya kabhi tujhe ignore kiya...",
  "Toh wo isliye nahi tha ki tu matter nahi karti...",
  "Bas kabhi kabhi khud ko samajhna mushkil ho jaata hai...",
];

const DistanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-spacing flex items-center justify-center">
      <motion.div
        className="glass-card p-10 md:p-14 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={`font-body text-sm md:text-base leading-relaxed mb-4 last:mb-0 ${
              i === lines.length - 1 ? "text-primary font-semibold mt-6" : "text-foreground/75"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.4 }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default DistanceSection;
