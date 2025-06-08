import { motion } from "framer-motion";
import FlyingShip from "../components/FlyingShip";
import FlyingShip_2 from "../components/FlyingShip_2";

export default function Blog() {
  return (
    <div className="relative min-h-screen bg-[#f9fafb] py-16 px-6 sm:px-12 md:px-24 text-gray-800 font-sans">
      {/* Decorative Floating Bubbles */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-ping" />

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Left: Sticky Quote / Title */}
        <motion.div
          className="md:sticky md:top-32"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-4xl font-black text-blue-700 leading-tight mb-6">
            💻 Code là đam mê
          </h1>
          <blockquote className="italic text-gray-600 text-lg border-l-4 border-blue-300 pl-4">
            “Chúng ta không chỉ code để sống, mà đang sống để được code.”
          </blockquote>
          <div className="absolute left-[30px] top-[140px]  animate-up-down  w-64 h-64">
            <img
              src="https://res.cloudinary.com/dd0qffuvy/image/upload/v1749356962/coder3-removebg-preview_zfdvna.png"
              alt=""
              srcset=""
            />
          </div>
        </motion.div>

        {/* Right: Blog content */}
        <motion.div
          className="space-y-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Section title="✨ Dòng code đầu tiên">
            <p>
              Tôi vẫn nhớ lần đầu gõ <Code>console.log("Hello World")</Code>.
              Dòng chữ nhỏ đó làm tôi phấn khích – như thể mình có thể nói
              chuyện với máy tính lần đầu tiên.
            </p>
            <FloatingNote>
              “Code là ngôn ngữ của sáng tạo kỹ thuật số.”
            </FloatingNote>
          </Section>

          <Section title="🧠 Code cũng là nghệ thuật">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>UI mượt mà</strong> là thẩm mỹ.
              </li>
              <li>
                <strong>Hiệu suất tối ưu</strong> là sự tinh tế.
              </li>
              <li>
                <strong>Kiến trúc rõ ràng</strong> là tư duy có chiều sâu.
              </li>
            </ul>
          </Section>

          <Section title="⚙️ Những đêm trắng... nhưng vui">
            <p>
              Tôi từng fix bug đến 2–3h sáng. Không ai ép – tôi chỉ muốn nó
              chạy. Những lúc đó, tôi nhận ra: mình đang làm điều mình yêu.
            </p>
          </Section>

          <Section title="🔥 Giữ lửa đam mê">
            <p>
              Có những lúc mệt, muốn bỏ cuộc. Nhưng mỗi lần build xong một tính
              năng, thấy user khen một câu “dùng sướng ghê”, tôi lại thấy xứng
              đáng.
            </p>
          </Section>

          <Section title="💬 Kết lại">
            <p>
              <strong>Code là công cụ. Đam mê là nhiên liệu.</strong>
              <br />
              Nếu bạn đam mê, hãy giữ lửa. Hành trình lập trình luôn có chông
              gai, nhưng cũng đầy niềm vui sáng tạo.
            </p>
          </Section>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      {children}
    </motion.section>
  );
}

function Code({ children }) {
  return (
    <code className="bg-gray-100 text-sm text-gray-800 px-2 py-1 rounded font-mono">
      {children}
    </code>
  );
}

function FloatingNote({ children }) {
  return (
    <div className="relative bg-yellow-100 border-l-4 border-yellow-400 px-4 py-3 text-sm italic rounded shadow-sm mt-4">
      <span className="absolute top-[-10px] left-[-10px] text-2xl">📝</span>
      {children}
    </div>
  );
}
