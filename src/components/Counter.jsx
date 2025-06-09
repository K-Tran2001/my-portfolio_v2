import { useEffect, useState } from "react";

const Counter = ({ target = 1000, duration = 1000, className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [target, duration]);

  return (
    <div className={`text-4xl font-bold text-blue-600 ${className}`}>
      {count.toLocaleString() + " +"}
    </div>
  );
};

export default Counter;
