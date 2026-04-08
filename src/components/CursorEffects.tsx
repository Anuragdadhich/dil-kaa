import { useEffect } from "react";

const CursorEffects = () => {
  useEffect(() => {
    let throttle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - throttle < 50) return;
      throttle = now;

      const sparkle = document.createElement("div");
      sparkle.className = "cursor-sparkle";
      sparkle.style.left = `${e.clientX - 3}px`;
      sparkle.style.top = `${e.clientY - 3}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 600);
    };

    const handleClick = (e: MouseEvent) => {
      const hearts = ["🤍", "💛", "🧡"];
      for (let i = 0; i < 3; i++) {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.textContent = hearts[i % hearts.length];
        heart.style.left = `${e.clientX + (Math.random() - 0.5) * 40}px`;
        heart.style.top = `${e.clientY}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default CursorEffects;
