/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Smartphone, 
  Tablet, 
  Battery, 
  Zap, 
  Database, 
  Camera, 
  ShieldCheck, 
  History, 
  Timer, 
  MapPin, 
  Facebook, 
  MessageSquare, 
  Star,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  Wrench,
  Sparkles
} from "lucide-react";
import { useState, useRef } from "react";

const FB_PROFILE = "https://www.facebook.com/profile.php?id=61560676885514";
const FB_REVIEWS = "https://www.facebook.com/profile.php?id=61560676885514&sk=reviews";
const PHONE = "534 156 900";

const SERVICES = [
  { icon: Smartphone, name: "Wymiana wyświetlaczy", desc: "Przywracamy krystaliczny obraz." },
  { icon: Battery, name: "Wymiana baterii", desc: "Twoje urządzenie znów wytrzyma cały dzień." },
  { icon: Zap, name: "Porty ładowania", desc: "Koniec z szukaniem idealnego kąta kabla." },
  { icon: ShieldCheck, name: "Tylna obudowa", desc: "Szklane plecki jak prosto z pudełka." },
  { icon: Sparkles, name: "Czyszczenie portów", desc: "Głośniki i mikrofony odzyskają moc." },
  { icon: Database, name: "Dane i kopie", desc: "Bezpieczne przenoszenie cennych wspomnień." },
  { icon: Camera, name: "Szkła aparatów", desc: "Aby każde zdjęcie było znów idealnie ostre." },
];

const LOCATIONS = [
  "Raciąż", "Ciechanów", "Drobin", "Strzegowo", "Baboszewo", "Glinojeck"
];

const WHY_US = [
  { title: "Dokładna diagnoza", detail: "Sprawdzamy wszystko przed wymianą." },
  { title: "Uczciwa wycena", detail: "Cena ustalona z góry, bez niespodzianek." },
  { title: "Szybka realizacja", detail: "Większość napraw wykonujemy od ręki." },
  { title: "Dokumentacja foto", detail: "Przesyłamy zdjęcia przed i po naprawie." },
  { title: "Estetyka pracy", detail: "Dbamy o każdy szczegół wewnątrz i zewnątrz." },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tighter text-white uppercase italic">Naprawa telefonów</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#serwis" className="hover:text-brand transition-colors">Serwis</a>
            <a href="#dlaczego" className="hover:text-brand transition-colors">Dlaczego my</a>
            <a href="#lokalizacje" className="hover:text-brand transition-colors">Zasięg</a>
            <a href={FB_PROFILE} target="_blank" rel="noreferrer" className="bg-white text-black px-4 py-2 hover:bg-brand hover:text-white transition-all flex items-center gap-2">
              <Facebook size={14} /> Kontakt
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[100] bg-surface flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-display font-bold">
              <a href="#serwis" onClick={() => setIsMenuOpen(false)}>Serwis</a>
              <a href="#dlaczego" onClick={() => setIsMenuOpen(false)}>Dlaczego My</a>
              <a href="#lokalizacje" onClick={() => setIsMenuOpen(false)}>Zasięg</a>
              <a href={FB_PROFILE} className="text-brand">Facebook</a>
            </div>
            <div className="mt-auto">
              <p className="text-sm opacity-50 mb-2">Zadzwoń do nas</p>
              <a href={`tel:+48${PHONE.replace(/\s/g, '')}`} className="text-2xl font-display tracking-tight text-white">{PHONE}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-brand"></span>
                <span className="text-brand uppercase tracking-[0.2em] text-xs font-bold">Raciąż · Strzegowo · Ciechanów</span>
              </div>
              <h1 className="text-6xl md:text-[120px] font-bold leading-[0.9] mb-8 uppercase italic">
                Naprawa <br />
                <span className="text-brand">Twojego</span> mobilnego świata
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl mb-10 text-gray-400 font-light leading-relaxed">
                Profesjonalny serwis telefonów i tabletów. Odbieramy sprzęt od Ciebie, naprawiamy i oddajemy. 
                Szybko, przejrzyście i z pasją do technologii.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:+48${PHONE.replace(/\s/g, '')}`} 
                  className="group relative px-8 py-5 bg-brand text-white overflow-hidden shadow-2xl shadow-brand/20 flex items-center justify-center gap-4 border border-brand"
                >
                  <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-lg font-bold tracking-tight">{PHONE}</span>
                </a>
                <a 
                  href={FB_PROFILE}
                  className="px-8 py-5 glass hover:bg-white/10 transition-colors flex items-center justify-center gap-4 text-white"
                >
                  <MessageSquare size={20} />
                  <span className="text-lg font-bold tracking-tight">Wyceń naprawę</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Background Text Overlay */}
          <div className="absolute -bottom-10 -right-20 pointer-events-none opacity-[0.03] select-none">
            <span className="text-[300px] md:text-[500px] font-display font-black leading-none uppercase">RACIAZ</span>
          </div>
        </section>

        {/* Marquee Locations */}
        <div className="bg-surface border-y border-line py-8 overflow-hidden">
          <div className="flex whitespace-nowrap gap-12 animate-marquee">
            {[...LOCATIONS, ...LOCATIONS, ...LOCATIONS].map((loc, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-widest text-white/40">{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <section id="serwis" className="section-container relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[120px] rounded-full"></div>
          
          <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6 italic leading-none">
                Zakres <span className="text-brand">Usług</span>
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Od pękniętych szyb po skomplikowane usterki ładowania. Twój telefon zasługuje na drugie życie.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-[2px] bg-white mt-3"></div>
              <p className="text-xs uppercase tracking-widest font-bold max-w-[200px]">
                Używamy wyłącznie sprawdzonych części najwyższej jakości
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="bg-bg p-10 flex flex-col transition-all group"
              >
                <div className="mb-8 w-14 h-14 bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                  <s.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">{s.desc}</p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  Dowiedz się więcej <ArrowUpRight size={14} />
                </div>
              </motion.div>
            ))}
            <div className="bg-brand p-10 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">I wiele więcej...</h3>
                <p className="text-white/80 mb-8 font-light italic">
                  Naprawiamy też tablety oraz urządzenia innych marek. Napisz i zapytaj o swoją usterkę.
                </p>
                <a href={FB_PROFILE} className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:underline">
                  Zapytaj o model <ChevronRight size={16} />
                </a>
              </div>
              <Smartphone className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10 rotate-12" />
            </div>
          </div>
        </section>

        {/* Why Us - Editorial Layout */}
        <section id="dlaczego" className="bg-surface relative py-24 md:py-32 border-y border-line overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-gray-900 border border-line relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop" 
                  alt="Precision Repair" 
                  className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-3 py-1 bg-brand text-[10px] font-bold uppercase tracking-[0.2em]">Live Repair</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium">Status: Dokładna Diagnoza</div>
                  </div>
                  <p className="text-2xl font-display font-bold leading-tight">Zawsze dbamy o estetykę i jakość każdego detalu.</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand flex items-center justify-center p-4">
                <ShieldCheck size={48} className="text-white" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-8xl font-bold uppercase mb-12 italic">
                Dlaczego <span className="text-brand">My?</span>
              </h2>
              <div className="space-y-12">
                {WHY_US.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-8 border-b border-line pb-8 hover:px-4 transition-all duration-300"
                  >
                    <span className="text-brand font-display font-bold text-lg">0{i + 1}/</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 uppercase">{item.title}</h3>
                      <p className="text-gray-400 font-light italic">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Service Detail */}
        <section className="section-container">
          <div className="relative p-12 md:p-24 bg-brand text-white overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-black text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Premium Service</div>
                <h2 className="text-4xl md:text-6xl font-bold uppercase italic leading-none mb-8">
                  Usługa <br /> dojazdowa
                </h2>
                <div className="space-y-6 text-lg font-light">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={24} /> <span>Darmowy odbiór urządzenia</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={24} /> <span>Naprawa na miejscu (w wybranych przypadkach)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={24} /> <span>Zwrot pod same drzwi</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/10 backdrop-blur-sm p-6 md:p-10 border border-white/20">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-60 italic">Zasięg mobilny:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 font-display font-bold text-lg md:text-xl uppercase italic">
                  {LOCATIONS.map((l, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 border-l-2 border-white/10 pl-3 hover:border-brand transition-colors"
                    >
                      <MapPin size={16} className="text-white/40" /> 
                      {l}
                    </motion.div>
                  ))}
                  <div className="col-span-full text-[10px] font-bold uppercase tracking-[0.2em] mt-6 opacity-50 flex items-center gap-3">
                    <span className="w-4 h-px bg-white/30"></span> oraz okoliczne miejscowości
                  </div>
                </div>
              </div>
            </div>
            
            <MapPin className="absolute -top-20 -right-20 w-96 h-96 text-black/5" />
          </div>
        </section>

        {/* Testimonials section looking like FB reviews */}
        <section id="opinie" className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex gap-1 text-brand">
                <Star size={32} fill="currentColor" />
                <Star size={32} fill="currentColor" />
                <Star size={32} fill="currentColor" />
                <Star size={32} fill="currentColor" />
                <Star size={32} fill="currentColor" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Co mówią nasi klienci?</h2>
            <p className="text-xl text-gray-400 font-light mb-12 italic">
              Nasza jakość potwierdzona jest dziesiątkami zadowolonych osób na portalach społecznościowych. 
              Dołącz do nich i ciesz się sprawnym telefonem.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href={FB_REVIEWS} 
                target="_blank" 
                rel="noreferrer"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold uppercase tracking-tighter text-xl hover:bg-brand hover:text-white transition-all"
              >
                Zobacz opinie na Facebook <Facebook size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section id="kontakt" className="py-24 bg-surface border-t border-line text-center overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span className="text-[20vw] font-black text-white/[0.02] uppercase leading-none">KONTAKT</span>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h3 className="text-xl uppercase tracking-[0.3em] font-bold text-brand mb-6">Masz pytania?</h3>
            <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none mb-12">Wycena <br /> w kilka <span className="text-brand">minut</span></h2>
            <p className="text-xl text-gray-400 font-light mb-12">Podaj model urządzenia i opisz usterkę w wiadomości na Facebooku lub zadzwoń.</p>
            
            <div className="flex flex-col items-center gap-6">
              <a href={`tel:+48${PHONE.replace(/\s/g, '')}`} className="text-4xl md:text-7xl font-display font-medium hover:text-brand transition-colors tracking-tight">
                {PHONE}
              </a>
              <div className="h-px w-24 bg-line"></div>
              <a href={FB_PROFILE} target="_blank" rel="noreferrer" className="text-lg opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest font-bold flex items-center gap-2">
                Napisz na Facebook Messenger <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg py-12 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-lg tracking-tighter text-white uppercase italic">Naprawa telefonów</span>
            </div>
            <p className="text-sm opacity-40 italic">© 2026 Naprawa telefonów Raciąż. Wszystkie prawa zastrzeżone.</p>
          </div>
          
          <div className="flex gap-12 font-display uppercase font-bold text-[10px] tracking-[0.2em] opacity-60">
            <a href={FB_PROFILE} className="hover:text-brand transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Floating Buttons on Desktop/Sticky Bot Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <a 
          href={`tel:+48${PHONE.replace(/\s/g, '')}`} 
          className="w-14 h-14 bg-brand text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all md:hidden"
        >
          <Phone size={24} />
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

