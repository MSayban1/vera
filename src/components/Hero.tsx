import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const tagline = "Where every sip tells a story.";
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-base-white">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-orange rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-green rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 pt-20 relative z-10">
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.h1 
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[clamp(6rem,15vw,14rem)] leading-[0.8] tracking-tighter text-dark-accent mb-6 lg:-ml-12 select-none"
          >
            Vera
          </motion.h1>

          <div className="flex flex-wrap gap-1 mb-8">
            {tagline.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.03, duration: 0.5 }}
                className="font-accent text-3xl lg:text-4xl text-secondary-green"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center gap-3 bg-primary-orange text-white px-8 py-4 rounded-full font-subheading text-sm uppercase tracking-[0.2em] shadow-2xl shadow-primary-orange/30 overflow-hidden"
          >
            <span className="relative z-10">Explore Our Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          </motion.button>
        </div>

        {/* Right Side: Image/Illustration */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] mt-12 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-secondary-green/20 mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80" 
              alt="Premium Coffee" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Floating Gold Accents */}
            <div className="absolute top-10 right-10 w-20 h-20 border border-gold-accent/30 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 border border-gold-accent/20 rounded-full animate-reverse-spin-slow"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="bg-primary-orange py-4 overflow-hidden whitespace-nowrap border-y border-gold-accent/30 relative z-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block"
        >
          <span className="font-subheading text-white text-sm uppercase tracking-[0.3em] px-4">
            CRAFTED WITH LOVE • BAHAWALPUR'S FINEST • VERA PAKISTAN • PREMIUM CAFE • CRAFTED WITH LOVE • BAHAWALPUR'S FINEST • VERA PAKISTAN • PREMIUM CAFE • CRAFTED WITH LOVE • BAHAWALPUR'S FINEST • VERA PAKISTAN • PREMIUM CAFE •
          </span>
          <span className="font-subheading text-white text-sm uppercase tracking-[0.3em] px-4">
            CRAFTED WITH LOVE • BAHAWALPUR'S FINEST • VERA PAKISTAN • PREMIUM CAFE • CRAFTED WITH LOVE • BAHAWALPUR'S FINEST • VERA PAKISTAN • PREMIUM CAFE • CRAFTED WITH LOVE • BAHAWALPUR'S FINEST • VERA PAKISTAN • PREMIUM CAFE •
          </span>
        </motion.div>
      </div>
    </section>
  );
}
