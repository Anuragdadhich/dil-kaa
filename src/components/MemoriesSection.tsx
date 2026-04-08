import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Hand, Coffee } from "lucide-react";

const memories = [
  {
    icon: Eye,
    title: "Jab tu aankhon mein dekhti hai...",
    text: "Sach bolu? Main sharma jaata hoon 🤍",
  },
  {
    icon: Hand,
    title: "Tera haath pakad ke baithna...",
    text: "Pata nahi kyun... alag hi sukoon deta hai ✨",
  },
  {
    icon: Coffee,
    title: "Woh lunch wale moments...",
    text: "Chhote the, but mere liye special the 💛",
  },
];

const MemoryCard = ({ memory, index }: { memory: typeof memories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 15;
    const y = (e.clientY - rect.top - rect.height / 2) / 15;
    setTilt({ x: -y, y: x });
  };

  const Icon = memory.icon;

  return (
    <motion.div
      ref={ref}
      className="glass-card p-8 md:p-10 cursor-default"
      style={{ transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ boxShadow: "0 12px 40px rgba(180,120,60,0.15)" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
        style={{ background: "linear-gradient(135deg, hsl(var(--peach)), hsl(var(--accent)))" }}
      >
        <Icon size={18} className="text-primary" />
      </div>
      <p className="font-display text-base md:text-lg text-foreground/90 mb-2">{memory.title}</p>
      <p className="font-body text-sm text-muted-foreground">{memory.text}</p>
    </motion.div>
  );
};

const MemoriesSection = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {memories.map((m, i) => (
          <MemoryCard key={i} memory={m} index={i} />
        ))}
      </div>
    </section>
  );
};

export default MemoriesSection;
