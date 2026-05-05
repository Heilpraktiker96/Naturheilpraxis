/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation, Hero, About, Services, Gallery, Contact, Footer } from './components/Common';

export default function App() {
  return (
    <div className="min-h-screen">
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
  );
}

