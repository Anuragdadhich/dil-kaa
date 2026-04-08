import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ShayariIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing flex items-center justify-center">
      <motion.div
        className="glass-card p-10 md:p-16 max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="font-script text-xl md:text-2xl text-foreground/85 leading-[2] italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Har baat kehna zaroori nahi hota,
          <br />
          Kuch ehsaas bas mehsoos kiye jaate hain...
          <br />
          <span className="text-primary">Aur tu unhi ehsaason mein se ek hai 🤍</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ShayariIntro;
