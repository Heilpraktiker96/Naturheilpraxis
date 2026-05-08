/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation, Hero, About, Services, Gallery, Contact, Footer } from './components/Common';

export default function App() {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Global Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.11]">
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1920&auto=format&fit=crop" 
          alt="Nature background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

