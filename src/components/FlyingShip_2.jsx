import { useEffect, useRef, useState } from "react";

export default function FlyingShip_2() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.02;

      const width = window.innerWidth;
      const height = window.innerHeight;

      const x = ((timeRef.current * 100) % (width + 100)) - 50; // đi ngang qua màn hình
      const y = height / 2 + Math.sin(timeRef.current * 2) * 100; // uốn lượn theo sin

      setPosition({ x, y });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      className="absolute text-4xl transition-transform duration-200 pointer-events-none rotete"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      🚀
    </div>
  );
}
