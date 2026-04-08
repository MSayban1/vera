import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-base-white relative overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[30vw] font-display italic text-dark-accent/[0.03] leading-none">VERA</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Address Block */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-6xl lg:text-8xl mb-6">Visit Us</h2>
                <div className="h-1 w-24 bg-primary-orange"></div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-xs uppercase tracking-[0.3em] text-primary-orange mb-2">Location</h4>
                    <p className="font-display italic text-2xl text-dark-accent">
                      DC Chowk, Oppo. J. Brand<br />
                      Haquee Center, Bahawalpur
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-xs uppercase tracking-[0.3em] text-primary-orange mb-2">Contact</h4>
                    <a href="tel:03345932333" className="font-display italic text-2xl text-dark-accent hover:text-primary-orange transition-colors">
                      0334-5932333
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-xs uppercase tracking-[0.3em] text-primary-orange mb-2">Social</h4>
                    <a href="https://instagram.com/vera.pakistan" target="_blank" rel="noreferrer" className="font-display italic text-2xl text-dark-accent hover:text-primary-orange transition-colors">
                      @vera.pakistan
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <p className="font-accent text-3xl text-secondary-green">#vera</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Map Placeholder/Iframe */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-gold-accent/20"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.353456789!2d71.6833!3d29.3956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzQ0LjIiTiA3McKwNDEnMDAuMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Vera Location"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-xl border border-gold-accent/10 flex items-center gap-3">
                <div className="w-3 h-3 bg-primary-orange rounded-full animate-ping"></div>
                <span className="font-subheading text-[10px] uppercase tracking-widest font-bold">Open Now</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
