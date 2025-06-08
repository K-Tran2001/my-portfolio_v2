import { useEffect, useRef } from "react";

export default function Pointer() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  // Lưu vị trí mục tiêu (con trỏ)
  const targetPos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // Vị trí hiện tại của circle (có độ trễ)
  const circlePos = useRef({
    x: targetPos.current.x,
    y: targetPos.current.y,
  });
  console.log("targetPos", targetPos);
  console.log("circlePos", circlePos);
  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      // Dot di chuyển ngay lập tức
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    const animateCircle = () => {
      // Lấy vị trí hiện tại của circle
      const dx = targetPos.current.x - circlePos.current.x;
      const dy = targetPos.current.y - circlePos.current.y;

      // Độ trễ, tỉ lệ di chuyển mỗi frame (0.1 ~ 0.3)
      const ease = 0.1;

      circlePos.current.x += dx * ease;
      circlePos.current.y += dy * ease;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateCircle);
    };

    animateCircle();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Vòng tròn lớn có độ trễ */}
      <div
        ref={circleRef}
        className=" -mt-[15px] -mx-[15px] fixed w-[40px] h-[40px] border-2 border-blue-500 rounded-lg pointer-events-none opacity-70 z-40  "
      />
      {/* Dot nhỏ luôn chính giữa vòng tròn */}
      <div
        ref={dotRef}
        className="fixed w-[10px] h-[10px] bg-blue-500 rounded-full pointer-events-none z-50"
      />
    </>
  );
}
