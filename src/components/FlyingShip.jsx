import { useEffect, useState } from "react";

export default function FlyingShip() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - 25; // trừ nửa kích thước con tàu
      const y = e.clientY - 25;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="absolute transition-all duration-500 pointer-events-none text-4xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      🚀
    </div>
  );
}
