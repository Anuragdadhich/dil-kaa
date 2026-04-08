import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EndingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <motion.p
          className="font-body text-base text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Main perfect nahi hoon...
        </motion.p>
        <motion.p
          className="font-display text-2xl md:text-4xl text-foreground leading-snug mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Par tera hona meri life ka
          <br />
          <span className="text-gradient">sabse pretty part hai 🤍</span>
        </motion.p>

        <motion.div
          className="h-px w-20 mx-auto mb-10"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
        />

        <motion.p
          className="font-script text-lg text-primary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Ab ek smile to banti hai... 😊💛
        </motion.p>
      </motion.div>
    </section>
  );
};

export default EndingSection;
