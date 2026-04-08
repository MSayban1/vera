import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-accent py-20 px-6 border-t border-primary-orange/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <h2 className="text-6xl text-white mb-2">Vera</h2>
          <p className="font-accent text-2xl text-gold-accent">Where every sip tells a story.</p>
        </div>

        <div className="flex gap-6 mb-12">
          <a 
            href="https://instagram.com/vera.pakistan" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary-orange hover:border-primary-orange transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/923345932333" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-secondary-green hover:border-secondary-green transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="w-full h-px bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="font-subheading text-[10px] uppercase tracking-[0.3em] text-white/40">
            © 2025 Vera Pakistan. All rights reserved.
          </p>
          <div className="flex gap-8 font-subheading text-[10px] uppercase tracking-[0.3em] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
