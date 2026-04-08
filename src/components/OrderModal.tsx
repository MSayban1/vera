import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  initialQuantity: number;
}

export default function OrderModal({ isOpen, onClose, product, initialQuantity }: OrderModalProps) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  if (!product) return null;

  const total = product.price * quantity;

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all fields to proceed.");
      return;
    }

    const message = `Vera Pakistan
Product: ${product.name}
Quantity: ${quantity}
Total: Rs. ${total}
Name: ${formData.name}
Address: ${formData.address}
Phone: ${formData.phone}

vera.pakistan
#vera`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923345932333?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-dark-accent/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[70] md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full"
          >
            <div className="bg-base-white rounded-t-[32px] md:rounded-[32px] overflow-hidden shadow-2xl border-t-4 border-primary-orange">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display italic text-3xl text-dark-accent mb-1">Place Your Order</h3>
                    <p className="font-subheading text-xs uppercase tracking-widest text-primary-orange">
                      {product.name} • Rs. {product.price}
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-primary-orange/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-dark-accent" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Quantity & Summary */}
                  <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gold-accent/20">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-full border border-gold-accent/30 flex items-center justify-center hover:bg-primary-orange hover:text-white transition-all"
                      >
                        -
                      </button>
                      <span className="font-subheading text-lg w-4 text-center">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-full border border-gold-accent/30 flex items-center justify-center hover:bg-primary-orange hover:text-white transition-all"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-dark-accent/40 font-subheading">Total Amount</p>
                      <p className="text-xl font-display italic text-primary-orange">Rs. {total}</p>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-accent/60 font-subheading mb-2 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Ahmed Khan"
                        className="w-full px-5 py-3 rounded-xl border border-gold-accent/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange transition-all font-body text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-accent/60 font-subheading mb-2 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="03XX XXXXXXX"
                        className="w-full px-5 py-3 rounded-xl border border-gold-accent/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange transition-all font-body text-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-accent/60 font-subheading mb-2 ml-1">Delivery Address</label>
                      <textarea 
                        rows={3}
                        placeholder="Your full address in Bahawalpur"
                        className="w-full px-5 py-3 rounded-xl border border-gold-accent/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange transition-all font-body text-sm resize-none"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-secondary-green text-white py-4 rounded-xl font-subheading text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary-green/90 transition-all shadow-xl shadow-secondary-green/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Confirm on WhatsApp
                  </button>

                  <button 
                    onClick={onClose}
                    className="w-full text-center font-subheading text-[10px] uppercase tracking-widest text-dark-accent/40 hover:text-dark-accent transition-colors"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
