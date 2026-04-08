import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ShayariSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing flex items-center justify-center">
      <motion.div
        className="max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="h-px w-16 mx-auto mb-10"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <p className="font-script text-xl md:text-2xl text-foreground/80 leading-[2.2] italic">
          Dil ka rishta lafzon se nahi,
          <br />
          Ehsaason se banta hai...
          <br />
          Aur kuch log,
          <br />
          <span className="text-primary">Dil ke bahut kareeb hote hain bina bataye 🤍</span>
        </p>
        <motion.div
          className="h-px w-16 mx-auto mt-10"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.div>
    </section>
  );
};

export default ShayariSection;
