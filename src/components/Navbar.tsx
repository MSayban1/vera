import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'frosted-glass border-b border-primary-orange py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/H81ZS5rx/vera.jpg" 
            alt="Vera Logo" 
            className="h-10 w-10 rounded-full object-cover border border-gold-accent"
            referrerPolicy="no-referrer"
          />
          <span className="font-display italic text-2xl tracking-wider text-dark-accent">Vera</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-subheading text-sm uppercase tracking-widest">
          <a href="#hero" className="hover:text-primary-orange transition-colors">Home</a>
          <a href="#menu" className="hover:text-primary-orange transition-colors">Menu</a>
          <a href="#about" className="hover:text-primary-orange transition-colors">About</a>
          <a href="#contact" className="hover:text-primary-orange transition-colors">Contact</a>
        </div>

        <button className="bg-primary-orange text-white px-6 py-2 rounded-full font-subheading text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary-orange/20">
          Order Now
        </button>
      </div>
    </motion.nav>
  );
}
