import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-180 w-full overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6 text-white">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          AI-Native 5G & 6G Wireless Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-lg md:text-xl max-w-xl"
        >
          Building intelligent Radio Access Network (RAN) platforms that combine AI, edge computing, and advanced radio systems to power the next generation of cellular networks.
        </motion.p>

      </div>

    </section>
  );
}