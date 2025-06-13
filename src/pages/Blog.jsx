import { motion } from "framer-motion";
import FlyingShip from "../components/FlyingShip";
import FlyingShip_2 from "../components/FlyingShip_2";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen  py-16 px-6 sm:px-12 md:px-24 text-gray-800 font-sans dark:bg-gradient-to-tr dark:from-black/90 dark:to-black/90">
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
          <h1 className="text-4xl font-sans font-bold text-blue-700 dark:text-orange-400 leading-tight mb-6">
            💻 Code is Passion
          </h1>
          <blockquote className="italic text-gray-600 text-lg border-l-4 border-blue-300 pl-4 dark:text-white/[0.9]">
            “We don't just code to live, we live to code.”
          </blockquote>

          <div className="hidden md:block absolute left-[30px] top-[140px]  animate-up-down  w-64 h-64">
            <img
              src="https://res.cloudinary.com/dd0qffuvy/image/upload/v1749356962/coder3-removebg-preview_zfdvna.png"
              alt=""
              srcSet=""
            />
          </div>
        </motion.div>

        {/* Right: Blog content */}
        <motion.div
          className="space-y-10 bg-white dark:bg-transparent dark:text-white/[0.9] px-8 "
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Section title="✨ My First Line of Code">
            <p>
              I still remember the first time I typed{" "}
              <Code>console.log("Hello World")</Code>. That tiny line made me
              thrilled – like I was speaking to a computer for the very first
              time.
            </p>
            <FloatingNote>
              “Code is the language of digital creativity.”
            </FloatingNote>
          </Section>

          <Section title="🧠 Code is also an Art">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/[0.9]">
              <li>
                <strong>Smooth UI</strong> is aesthetic.
              </li>
              <li>
                <strong>Optimized performance</strong> is finesse.
              </li>
              <li>
                <strong>Clear architecture</strong> is deep thinking.
              </li>
            </ul>
          </Section>

          <Section title="⚙️ Sleepless Nights... Yet Joyful">
            <p>
              I used to fix bugs until 2–3 a.m. No one forced me – I just wanted
              it to run. That’s when I realized: I’m doing what I love.
            </p>
          </Section>

          <Section title="🔥 Keep the Passion Burning">
            <p>
              There were times I felt tired and wanted to give up. But every
              time I finished building a feature and heard a user say “this is
              so smooth,” it felt worth it.
            </p>
          </Section>

          <Section title="💬 Final Thoughts">
            <p>
              <strong>Code is the tool. Passion is the fuel.</strong>
              <br />
              If you’re passionate, keep the fire alive. The coding journey has
              its ups and downs, but it’s filled with creative joy.
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
      <h2 className="text-xl font-sans font-bold text-blue-600 dark:text-orange-400">
        {title}
      </h2>
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
    <div className="relative bg-yellow-100 border-l-4 border-yellow-400 px-4 py-3 text-sm italic rounded shadow-sm mt-4 dark:text-gray-800">
      <span className="absolute top-[-10px] left-[-10px] text-2xl">📝</span>
      {children}
    </div>
  );
}
