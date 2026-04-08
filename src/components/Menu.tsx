import { motion } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';
import OrderModal from './OrderModal';

const PRODUCTS = [
  { id: 1, name: "Signature Vera Latte", price: 350, description: "Our house blend with silky steamed milk and a hint of gold.", image: "https://picsum.photos/seed/latte/600/800" },
  { id: 2, name: "Cold Brew Espresso", price: 400, description: "24-hour slow-steeped concentrate for the ultimate caffeine kick.", image: "https://picsum.photos/seed/coldbrew/600/800" },
  { id: 3, name: "Caramel Frappuccino", price: 450, description: "Blended ice, rich caramel, and whipped cream perfection.", image: "https://picsum.photos/seed/frappe/600/800" },
  { id: 4, name: "Matcha Green Tea Latte", price: 380, description: "Premium ceremonial grade matcha whisked to perfection.", image: "https://picsum.photos/seed/matcha/600/800" },
  { id: 5, name: "Classic Cappuccino", price: 300, description: "Equal parts espresso, steamed milk, and airy foam.", image: "https://picsum.photos/seed/cappuccino/600/800" },
  { id: 6, name: "Belgian Waffle", price: 550, description: "Crispy outside, fluffy inside, topped with maple and berries.", image: "https://picsum.photos/seed/waffle/600/800" },
  { id: 7, name: "Vera Club Sandwich", price: 600, description: "Triple-layered classic with grilled chicken and fresh greens.", image: "https://picsum.photos/seed/sandwich/600/800" },
  { id: 8, name: "Chocolate Lava Cake", price: 500, description: "Warm, gooey center served with a scoop of vanilla bean ice cream.", image: "https://picsum.photos/seed/cake/600/800" },
];

interface ProductCardProps {
  key?: number;
  product: typeof PRODUCTS[0];
  onOrder: (product: any, quantity: number) => void;
}

function ProductCard({ product, onOrder }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[32px] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gold-accent/10"
    >
      <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-base-white">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
      </div>

      <div className="px-2">
        <h3 className="font-subheading font-medium text-lg text-dark-accent mb-1 group-hover:text-primary-orange transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-xs text-dark-accent/60 mb-4 line-clamp-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <span className="font-display italic text-xl text-primary-orange">Rs. {product.price}</span>
          
          <div className="flex items-center gap-3 bg-base-white px-3 py-1.5 rounded-full border border-gold-accent/20">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 hover:text-primary-orange transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="font-subheading text-xs w-3 text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 hover:text-primary-orange transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <button 
          onClick={() => onOrder(product, quantity)}
          className="w-full bg-primary-orange text-white py-3.5 rounded-2xl font-subheading text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary-orange/90 transition-all shadow-lg shadow-primary-orange/20"
        >
          <MessageCircle className="w-4 h-4" />
          Order on WhatsApp
        </button>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrder = (product: any, quantity: number) => {
    setSelectedProduct(product);
    setOrderQuantity(quantity);
    setIsModalOpen(true);
  };

  return (
    <section id="menu" className="py-24 px-6 lg:px-20 bg-base-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl mb-4"
          >
            Our Signature Menu
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-gold-accent mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOrder={handleOrder}
            />
          ))}
        </div>
      </div>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        initialQuantity={orderQuantity}
      />
    </section>
  );
}
