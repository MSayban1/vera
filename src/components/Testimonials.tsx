import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const TESTIMONIALS_ROW_1 = [
  { id: 1, name: "Sarah J.", text: "The Signature Vera Latte is a masterpiece. Best coffee in Bahawalpur!", rating: 5 },
  { id: 2, name: "Ahmed R.", text: "Luxury ambiance and world-class service. A must-visit spot.", rating: 5 },
  { id: 3, name: "Zainab M.", text: "The Belgian Waffles are to die for. Perfectly crispy and sweet.", rating: 5 },
  { id: 4, name: "Omar K.", text: "Finally, a cafe that understands premium quality in Pakistan.", rating: 5 },
];

const TESTIMONIALS_ROW_2 = [
  { id: 5, name: "Fatima L.", text: "Vera is my daily ritual. The cold brew is unmatched.", rating: 5 },
  { id: 6, name: "Bilal S.", text: "Stunning interior and even better coffee. Highly recommended.", rating: 5 },
  { id: 7, name: "Ayesha T.", text: "The attention to detail in every cup is truly impressive.", rating: 5 },
  { id: 8, name: "Hamza V.", text: "A true luxury experience in the heart of Bahawalpur.", rating: 5 },
];

interface TestimonialCardProps {
  key?: number;
  item: typeof TESTIMONIALS_ROW_1[0];
}

function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[32px] mx-4 group hover:bg-white/10 transition-all duration-500">
      <div className="flex gap-1 mb-4">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary-orange text-primary-orange" />
        ))}
      </div>
      <p className="font-display italic text-xl text-white mb-6 leading-relaxed">
        "{item.text}"
      </p>
      <p className="font-subheading text-xs uppercase tracking-[0.3em] text-gold-accent">
        {item.name}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary-green overflow-hidden relative">
      <div className="noise-bg absolute inset-0 pointer-events-none opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-5xl lg:text-6xl text-white mb-4">Voices of Vera</h2>
        <p className="font-subheading text-xs uppercase tracking-[0.4em] text-gold-accent">Loved by our community</p>
      </div>

      <div className="relative z-10 space-y-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1400] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex hover:[animation-play-state:paused]"
          >
            {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1400, 0] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex hover:[animation-play-state:paused]"
          >
            {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
