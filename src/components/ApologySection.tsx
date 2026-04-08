import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Agar kabhi tujhe laga ho ki main badal gaya...",
  "Ya tujhe importance dena kam kar diya...",
  "Toh sorry...",
  "Kyunki reality mein tu un logon mein se hai jise khone ka khayal bhi acha nahi lagta 🤍",
];

const ApologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-spacing flex items-center justify-center">
      <motion.div
        className="glass-card p-10 md:p-14 max-w-xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="w-12 h-12 mx-auto mb-8 rounded-full flex items-center justify-center text-2xl"
          style={{ background: "linear-gradient(135deg, hsl(var(--peach)), hsl(var(--blush)))" }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          💌
        </motion.div>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={`font-body text-sm md:text-base leading-relaxed mb-3 last:mb-0 ${
              i === 2 ? "font-display text-xl md:text-2xl text-primary my-6" : 
              i === lines.length - 1 ? "text-foreground/90 font-medium mt-4" : "text-foreground/70"
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.35 }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default ApologySection;
