import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 800px)
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-0 right-0 z-40 px-6 md:hidden"
        >
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-primary-orange text-white py-4 rounded-full font-subheading text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-primary-orange/40 active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-4 h-4" />
            Order Now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
