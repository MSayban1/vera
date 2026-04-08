import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ value, label }: { value: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 border-x border-white/10 first:border-l-0 last:border-r-0">
      <motion.span 
        className="text-5xl lg:text-7xl font-display italic text-white mb-2"
      >
        {count}{value.includes('+') ? '+' : ''}
      </motion.span>
      <span className="font-subheading text-white/60 text-xs uppercase tracking-[0.4em] text-center">
        {label}
      </span>
    </div>
  );
}

export default function AboutStrip() {
  return (
    <section id="about" className="bg-dark-accent relative overflow-hidden">
      <div className="noise-bg absolute inset-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 relative z-10">
        <Counter value="100+" label="Happy Customers" />
        <Counter value="20+" label="Menu Items" />
        <Counter value="1" label="Iconic Location" />
      </div>
    </section>
  );
}
