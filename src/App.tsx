/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStrip from './components/AboutStrip';
import Menu from './components/Menu';
import HowToOrder from './components/HowToOrder';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <main className="relative min-h-screen bg-base-white selection:bg-primary-orange selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutStrip />
      <Menu />
      <HowToOrder />
      <Testimonials />
      <LocationContact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
