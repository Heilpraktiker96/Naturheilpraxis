import { motion, AnimatePresence } from 'motion/react';
import { Leaf, GraduationCap, Users, Calendar, Phone, Mail, MapPin, ChevronRight, Sparkles, Shrub, Activity, Apple, Flower2, HelpingHand, Moon, Hand, X } from 'lucide-react';
import React, { useState, FormEvent } from 'react';

// Common Transition
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-warm-cream/80 backdrop-blur-md border-b border-nature-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-nature-sage rounded-full flex items-center justify-center text-white shadow-lg shadow-nature-sage/20">
              <Leaf size={24} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-earth-stone">Naturheilpraxis <span className="text-brand-orange">Escalera</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <motion.a 
              href="#über-mich" 
              whileHover={{ scale: 1.05, color: "#D97706" }} 
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium transition-colors"
            >
              Über mich
            </motion.a>
            <motion.a 
              href="#leistungen" 
              whileHover={{ scale: 1.05, color: "#D97706" }} 
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium transition-colors"
            >
              Leistungen
            </motion.a>
            <motion.a 
              href="#galerie" 
              whileHover={{ scale: 1.05, color: "#D97706" }} 
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium transition-colors"
            >
              Galerie
            </motion.a>
            <motion.a 
              href="#kontakt" 
              whileHover={{ scale: 1.05, backgroundColor: "#3D5A42" }} 
              whileTap={{ scale: 0.95 }}
              className="bg-nature-sage text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-md"
            >
              Kontakt
            </motion.a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-900"></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 p-4 absolute w-full left-0 flex flex-col gap-4 shadow-xl"
        >
          <a href="#über-mich" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Über mich</a>
          <a href="#leistungen" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Leistungen</a>
          <a href="#galerie" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Galerie</a>
          <a href="#kontakt" onClick={() => setIsOpen(false)} className="bg-brand-orange text-white text-center px-6 py-3 rounded-full text-lg font-medium">Kontakt</a>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 grain-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nature-sage-light text-nature-sage text-xs font-bold uppercase tracking-wider mb-6 border border-nature-sage/20">
              <Sparkles size={14} />
              Ganzheitliche Balance finden
            </div>
            <h1 className="font-serif text-5xl lg:text-8xl leading-[1] mb-6 text-earth-stone">
              Heilung im <br /><span className="italic text-brand-orange">Einklang</span> mit der Natur.
            </h1>
            <p className="text-lg text-earth-stone/70 mb-10 max-w-lg leading-relaxed">
              In meiner Naturheilpraxis schaffen wir einen Raum für Stille, Regeneration und tiefe Heilung. Entdecken Sie die Urkraft der Natur für Ihr Wohlbefinden.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#kontakt" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-orange text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-brand-orange/30"
              >
                Termin vereinbaren
              </motion.a>
              <motion.a 
                href="#leistungen" 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(54, 82, 61, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full text-lg font-medium border border-nature-sage/30 transition-colors flex items-center gap-2"
              >
                Meine Wege <ChevronRight size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="organic-blob aspect-square overflow-hidden shadow-2xl relative z-10 ring-8 ring-white/20">
              <img 
                  src: `${import.meta.env.BASE_URL}6.jpg`, alt: 'Heilkräuter' 
                alt="Heilkräuter" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Blobs */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-nature-sage rounded-full z-0 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange rounded-full z-0 blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="über-mich" className="py-20 lg:py-32 relative bg-nature-sage-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-2 lg:order-1 relative">
            <div className="relative z-10">
              <div className="organic-blob aspect-[3/4] overflow-hidden shadow-2xl scale-x-[-1]">
                 <img 
                  src: `${import.meta.env.BASE_URL}2.jpg`, alt: 'Kristalle & Heilung' 
                  alt="Heilpraktikerin Escalera" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -left-8 bottom-8 bg-warm-cream p-6 rounded-2xl shadow-xl hidden md:block max-w-[220px] border border-nature-sage/10">
                <div className="w-12 h-12 bg-nature-sage rounded-full flex items-center justify-center text-white mb-4">
                  <Shrub size={24} />
                </div>
                <p className="text-sm font-bold text-earth-stone">Staatlich geprüfte Heilpraktikerin</p>
                <p className="text-xs text-earth-stone/60 mt-1 italic">Naturverbunden & Empathisch</p>
              </div>
            </div>
            {/* Background element */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-nature-sage/10 rounded-[40%] blur-3xl -z-0"></div>
          </motion.div>
          
          <motion.div {...fadeIn} className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl lg:text-6xl mb-8 font-bold leading-tight">Über mich & <span className="text-nature-sage">meine Berufung.</span></h2>
            <div className="space-y-6 text-earth-stone/80 leading-relaxed text-xl font-light">
              <p>
                In einer Welt, die sich oft zu schnell dreht, lade ich Sie ein, innezuhalten. Mein Ansatz verbindet jahrtausendealtes Wissen der Naturheilkunde mit einem tiefen Verständnis für die aktuellen Herausforderungen des Alltags.
              </p>
              <p>
                Ich sehe den Menschen als komplexes Wesen, in dem Körper, Geist und Seele miteinander tanzen. Meine Aufgabe ist es, diesen Tanz wieder in Harmonie zu bringen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-nature-sage/5">
                  <div className="w-12 h-12 rounded-full bg-nature-sage-light flex items-center justify-center text-nature-sage shadow-inner">
                    <Users size={24} />
                  </div>
                  <span className="font-medium text-earth-stone">Individuelle Pfade</span>
                </div>
                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-nature-sage/5">
                  <div className="w-12 h-12 rounded-full bg-nature-sage-light flex items-center justify-center text-nature-sage shadow-inner">
                    <Sparkles size={24} />
                  </div>
                  <span className="font-medium text-earth-stone">Ganzheitliche Kraft</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Massagen",
    description: "Heilsame Berührungen zur Lösung von Verspannungen, Förderung der Durchblutung und Aktivierung der Selbstheilungskräfte.",
    icon: <Hand size={24} />
  },
  {
    title: "Phytotherapie",
    description: "Die Heilkraft der Pflanzen nutzen, um organische Prozesse sanft zu unterstützen.",
    icon: <Leaf size={24} />
  },
  {
    title: "Ernährungsberatung",
    description: "Ganzheitliche Konzepte für eine Ernährung, die zu Ihrem Stoffwechsel und Lebensstil passt.",
    icon: <Apple size={24} />
  },
  {
    title: "Pflanzliche Heilkunde",
    description: "Pflanzliche Wirkstoffe, die seit Jahrtausenden erfolgreich Anwendung in der Naturheilkunde finden.",
    icon: <Flower2 size={24} />
  },
  {
    title: "Schmerztherapie",
    description: "Manuelle Techniken und alternative Ansätze zur Linderung chronischer Schmerzen.",
    icon: <HelpingHand size={24} />
  },
  {
    title: "Entspannungstechniken",
    description: "Methoden zur Stressbewältigung und zur Förderung der regenerativen Kräfte.",
    icon: <Moon size={24} />
  }
];

export function Services() {
  return (
    <section id="leistungen" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-6xl mb-6 font-bold">Heilverfahren mit <span className="text-nature-sage italic">Tiefe.</span></h2>
          <p className="text-earth-stone/60 max-w-2xl mx-auto text-lg">
            Sanfte Wege zur Heilung. Ich kombiniere traditionelle Methoden mit tiefem Wissen über die Natur, um Ihren individuellen Prozess zu unterstützen.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-nature-sage/5 hover:border-brand-orange/20 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-nature-sage-light/50 rounded-full flex items-center justify-center text-nature-sage mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif text-earth-stone">{s.title}</h3>
              <p className="text-earth-stone/60 leading-relaxed text-lg">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = [
    { src: `${import.meta.env.BASE_URL}3.jpg`, alt: 'Kristalle & Heilung' },
    { src: `${import.meta.env.BASE_URL}4.jpg`, alt: 'Naturmittel' },
    { src: `${import.meta.env.BASE_URL}5.jpg`, alt: 'Zen Atmosphäre' },
    { src: `${import.meta.env.BASE_URL}6.jpg`, alt: 'Heilkräuter' },
    { src: `${import.meta.env.BASE_URL}7.jpg`, alt: 'Meditation' },
    { src: `${import.meta.env.BASE_URL}8.jpg`, alt: 'Energiearbeit' },
  ];

  // ... restliche Funktion (return etc.)


  return (
    <section id="galerie" className="py-24 mb-32 lg:py-40 relative bg-earth-stone overflow-hidden">
      <div className="absolute inset-0 opacity-10 grain-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeIn} className="mb-20 text-center">
          <h2 className="font-serif text-4xl lg:text-7xl mb-6 font-bold text-warm-cream">Bilder aus der <span className="text-brand-orange italic">Stille.</span></h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto opacity-50"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="organic-blob aspect-square overflow-hidden transform group-hover:scale-105 transition-all duration-700 shadow-2xl">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="py-20 lg:py-40 relative overflow-hidden bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div {...fadeIn}>
            <h2 className="font-serif text-4xl lg:text-7xl mb-10 font-bold text-earth-stone leading-tight">Treten wir <br /><span className="text-nature-sage italic">in Kontakt.</span></h2>
            <p className="text-earth-stone/70 text-xl mb-12 font-light leading-relaxed">
              Jeder Weg beginnt mit einem ersten Schritt. Lassen Sie uns gemeinsam herausfinden, wie ich Sie auf Ihrer Reise zu mehr Balance unterstützen kann.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-full bg-nature-sage-light flex items-center justify-center text-nature-sage shrink-0 group-hover:bg-nature-sage group-hover:text-white transition-all shadow-inner">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-nature-sage uppercase tracking-widest font-black mb-1">Telefonisch</p>
                  <div className="flex flex-col gap-4">
                    <a href="tel:+494101793780" className="text-2xl font-light text-earth-stone hover:text-brand-orange transition-colors cursor-pointer">
                      +49 4101 793780
                    </a>
                    <motion.a 
                      href="tel:+494101793780" 
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-brand-orange/20 w-fit"
                    >
                      <Phone size={18} />
                      Direkt anrufen
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-full bg-nature-sage-light flex items-center justify-center text-nature-sage shrink-0 group-hover:bg-nature-sage group-hover:text-white transition-all shadow-inner">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-nature-sage uppercase tracking-widest font-black mb-1">Elektronisch</p>
                  <p className="text-2xl font-light text-earth-stone hover:text-brand-orange transition-colors cursor-pointer">info@naturheilpraxis-escalera.de</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-full bg-nature-sage-light flex items-center justify-center text-nature-sage shrink-0 group-hover:bg-nature-sage group-hover:text-white transition-all shadow-inner">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-nature-sage uppercase tracking-widest font-black mb-1">Vor Ort</p>
                  <p className="text-2xl font-light text-earth-stone hover:text-brand-orange transition-colors cursor-pointer">Bismarckstr. 4, 25421 Pinneberg</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-xl p-10 md:p-16 rounded-[4rem] shadow-2xl border border-white relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-nature-sage-light rounded-full blur-2xl opacity-50 z-0"></div>
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-nature-sage uppercase tracking-widest ml-1">Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Ihr Name"
                    className="w-full px-8 py-5 rounded-3xl bg-white border-transparent focus:border-nature-sage focus:ring-4 focus:ring-nature-sage/5 transition-all outline-none shadow-sm text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-nature-sage uppercase tracking-widest ml-1">E-Mail</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="ihre@mail.de"
                    className="w-full px-8 py-5 rounded-3xl bg-white border-transparent focus:border-nature-sage focus:ring-4 focus:ring-nature-sage/5 transition-all outline-none shadow-sm text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-nature-sage uppercase tracking-widest ml-1">Anliegen</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Wie kann ich Ihnen helfen?"
                  className="w-full px-8 py-5 rounded-3xl bg-white border-transparent focus:border-nature-sage focus:ring-4 focus:ring-nature-sage/5 transition-all outline-none shadow-sm text-lg resize-none"
                ></textarea>
              </div>
              <p className="text-[10px] text-earth-stone/50 px-4 leading-tight">
                Durch das Absenden des Formulars erklären Sie sich damit einverstanden, dass Ihre Daten zur Bearbeitung Ihres Anliegens verwendet werden (Weitere Infos in der <button type="button" onClick={() => (document.querySelector('footer button:nth-of-type(2)') as HTMLButtonElement)?.click()} className="underline hover:text-nature-sage">Datenschutzerklärung</button>).
              </p>
              <motion.button 
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-nature-sage text-white py-6 rounded-full text-xl font-bold transition-all shadow-xl shadow-nature-sage/20 disabled:opacity-50"
              >
                {status === 'loading' ? 'Wird versendet...' : 'Nachricht senden'}
              </motion.button>
              
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-nature-sage font-bold p-4 bg-nature-sage-light/30 rounded-2xl">
                  <Sparkles size={20} />
                  <span>Vielen Dank! Ich melde mich bald bei Ihnen.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [modalContent, setModalContent] = useState<'impressum' | 'datenschutz' | null>(null);

  const Modal = ({ children, title, onClose }: { children: React.ReactNode, title: string, onClose: () => void }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-earth-stone/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-warm-cream max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-[3rem] p-8 md:p-12 relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-earth-stone/40 hover:text-earth-stone transition-colors">
          <X size={32} />
        </button>
        <h2 className="font-serif text-3xl font-bold text-earth-stone mb-8">{title}</h2>
        <div className="text-earth-stone/70 leading-relaxed space-y-6 font-light">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <footer className="bg-nature-sage text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grain-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-nature-sage">
                <Leaf size={24} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Naturheilpraxis <span className="text-brand-orange">Escalera</span></span>
            </div>
            <p className="text-white/60 leading-relaxed font-light">
              Ganzheitliche Wege zur Heilung. Ihre Praxis für Naturheilkunde, Massagen und traditionelle Pflanzenheilkunde.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Links</h4>
              <nav className="flex flex-col gap-2 text-white/60 font-light">
                <motion.a href="#über-mich" whileHover={{ x: 5, color: "#FBBF24" }} className="transition-all">Über mich</motion.a>
                <motion.a href="#leistungen" whileHover={{ x: 5, color: "#FBBF24" }} className="transition-all">Leistungen</motion.a>
                <motion.a href="#galerie" whileHover={{ x: 5, color: "#FBBF24" }} className="transition-all">Galerie</motion.a>
                <motion.a href="#kontakt" whileHover={{ x: 5, color: "#FBBF24" }} className="transition-all">Kontakt</motion.a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Rechtliches</h4>
              <nav className="flex flex-col gap-2 text-white/60 font-light">
                <motion.button onClick={() => setModalContent('impressum')} whileHover={{ x: 5, color: "#FBBF24" }} className="transition-all text-left">Impressum</motion.button>
                <motion.button onClick={() => setModalContent('datenschutz')} whileHover={{ x: 5, color: "#FBBF24" }} className="transition-all text-left">Datenschutz</motion.button>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/40 font-light">
            © {new Date().getFullYear()} Naturheilpraxis Escalera. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-2 text-white/20">
            <Sparkles size={16} />
            <span className="text-[10px] uppercase font-black tracking-widest leading-none">Heilung in Harmonie</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalContent === 'impressum' && (
          <Modal title="Impressum" onClose={() => setModalContent(null)}>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-earth-stone mb-2">Angaben gemäß § 5 TMG</h3>
                <p>
                  Naturheilpraxis Escalera<br />
                  Bismarckstr. 4<br />
                  25421 Pinneberg
                </p>
              </div>
              <div>
                <h3 className="font-bold text-earth-stone mb-2">Vertreten durch</h3>
                <p>Dolores Escalera (Heilpraktikerin)</p>
              </div>
              <div>
                <h3 className="font-bold text-earth-stone mb-2">Kontakt</h3>
                <p>
                  Telefon: +49 4101 793780<br />
                  E-Mail: info@naturheilpraxis-escalera.de
                </p>
              </div>
              <div>
                <h3 className="font-bold text-earth-stone mb-2">Gesetzliche Berufsbezeichnung</h3>
                <p>
                  Heilpraktikerin (verliehen in der Bundesrepublik Deutschland)
                </p>
              </div>
            </div>
          </Modal>
        )}

        {modalContent === 'datenschutz' && (
          <Modal title="Datenschutzerklärung" onClose={() => setModalContent(null)}>
            <div className="space-y-6">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
              </p>
              
              <section>
                <h3 className="font-bold text-earth-stone mb-2">1. Verantwortliche Stelle</h3>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                  Dolores Escalera<br />
                  Bismarckstr. 4, 25421 Pinneberg
                </p>
              </section>

              <section>
                <h3 className="font-bold text-earth-stone mb-2">2. Rechtsgrundlagen der Verarbeitung</h3>
                <p>
                  Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website).
                </p>
              </section>

              <section>
                <h3 className="font-bold text-earth-stone mb-2">3. Erfassung von Daten (Server-Logfiles)</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-earth-stone mb-2">4. Kontaktformular / E-Mail</h3>
                <p>
                  Wenn Sie uns per E-Mail oder Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten werden gelöscht, sobald sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-earth-stone mb-2">5. Dauer der Speicherung</h3>
                <p>
                  Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der oben genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen Aufbewahrungsfristen verlangen.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-earth-stone mb-2">6. SSL-Verschlüsselung</h3>
                <p>
                  Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (SSL/TLS) über HTTPS.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-earth-stone mb-2">7. Ihre Rechte</h3>
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch. Zudem haben Sie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Landesbeauftragte für Datenschutz Schleswig-Holstein).
                </p>
              </section>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </footer>
  );
}
