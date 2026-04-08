import { motion } from 'motion/react';
import { ShoppingBag, UserCheck, MessageCircle } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "Pick your item",
    description: "Browse our signature menu and select your favorites.",
    icon: ShoppingBag
  },
  {
    id: 2,
    title: "Fill your details",
    description: "Provide your name and delivery address in the order form.",
    icon: UserCheck
  },
  {
    id: 3,
    title: "We confirm on WhatsApp",
    description: "Our team will reach out to you instantly for confirmation.",
    icon: MessageCircle
  }
];

export default function HowToOrder() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-base-white relative overflow-hidden">
      <div className="noise-bg absolute inset-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl mb-4">How to Order</h2>
          <p className="font-subheading text-xs uppercase tracking-[0.4em] text-primary-orange">Simple • Seamless • Direct</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-gold-accent/30 -translate-y-1/2 z-0"></div>

          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-gold-accent/20 flex items-center justify-center mb-8 shadow-xl group-hover:border-primary-orange group-hover:scale-110 transition-all duration-500 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-orange text-white font-display italic flex items-center justify-center text-sm shadow-lg">
                  {step.id}
                </div>
                <step.icon className="w-8 h-8 text-secondary-green group-hover:text-primary-orange transition-colors" />
              </div>
              
              <h3 className="font-subheading text-lg uppercase tracking-widest mb-4 text-dark-accent">
                {step.title}
              </h3>
              <p className="font-body text-sm text-dark-accent/60 max-w-[250px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
