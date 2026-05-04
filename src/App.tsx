/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  AlertCircle, 
  FileText, 
  Database, 
  Share2, 
  Euro, 
  Clock, 
  CheckCircle2, 
  Mail, 
  MapPin,
  FileDigit,
  ArrowRight,
  Info
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900" id="main-wrapper">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 py-4 px-6 md:px-12 flex justify-between items-center" id="navbar">
        <div className="flex items-center gap-2" id="logo-container">
          <ShieldCheck className="text-blue-600 w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-slate-800">Behold dit bogføringsprogram</span>
        </div>
        <div className="hidden md:flex gap-8 items-center" id="nav-links">
          <a href="#krav" className="text-sm font-medium hover:text-blue-600 transition-colors">Loven</a>
          <a href="#losninger" className="text-sm font-medium hover:text-blue-600 transition-colors">Løsninger</a>
          <a href="#om-os" className="text-sm font-medium hover:text-blue-600 transition-colors">Om os</a>
          <a 
            href="#losninger" 
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm shadow-blue-200"
            id="nav-cta"
          >
            Se priser
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center" id="hero">
        <motion.div {...fadeIn}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6" id="badge">
            <CheckCircle2 className="w-4 h-4" /> Overhold bogføringsloven nemt
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight" id="hero-title">
            Du skal ikke skifte dit <span className="text-blue-600">bogføringsprogram</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl" id="hero-subtitle">
            Hvorfor skifte bogføringsprogram, når det stadigvæk virker? Vi hjælper dig med at opfylde kravene om digital bogføring til en brøkdel af prisen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" id="hero-actions">
            <a 
              href="#losninger" 
              className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg"
              id="hero-primary-cta"
            >
              Se vores løsninger <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-3 text-slate-500" id="trust-indicator">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden" />
                ))}
              </div>
              <span className="text-sm font-medium">Både for selskaber & enkeltmandsvirksomheder</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
          id="hero-visual"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl blur-3xl opacity-50 -z-10" />
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden" id="hero-card">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
              <h3 className="font-bold text-lg text-slate-800">5 krav til digital bogføring</h3>
              <FileDigit className="text-blue-500 w-5 h-5" />
            </div>
            <div className="space-y-5">
              {[
                'Nøjagtig registrering snarest muligt',
                'Sikring af transaktionsspor',
                'Sikring af kontrolspor og bilag',
                'Betryggende opbevaring i 5 år',
                'Sikring mod fejl og misbrug'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Solutions / Pricing */}
      <section className="bg-blue-600 py-24 text-white relative overflow-hidden" id="losninger">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 opacity-50 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 relative z-10" id="pricing-container">
          <div>
            <h2 className="text-4xl font-extrabold mb-8">Vi har sat os grundigt ind i loven - så du ikke behøver</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Vores løsninger gør det muligt at opfylde samtlige krav uden at bruge mange timer på it-udvikling eller lære komplicerede systemer.
            </p>
            <div className="space-y-4">
              {['Simpelt og let trin-for-trin vejledning', 'Garanteret overholdelse af loven', 'Support på dansk', 'Ingen tekniske forkundskaber påkrævet'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-200 w-6 h-6" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl relative" id="pricing-card">
            <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-bounce">Populær</div>
            <h3 className="text-2xl font-bold mb-2">Den samlede pakke</h3>
            <p className="text-slate-500 mb-8 text-sm italic">Opfyld alle krav i én pakke</p>
            <div className="flex items-baseline gap-2 mb-8" id="price">
              <span className="text-6xl font-black tracking-tighter">1.995,-</span>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Ex. Moms</span>
            </div>
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-3 text-sm font-medium border-b border-slate-100 pb-4">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                Opfylder alle krav til digitale bogføringssystemer
              </li>
              <li className="flex items-center gap-3 text-sm font-medium border-b border-slate-100 pb-4">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                Fuld løsning af bl.a. E-faktura & SAF-T
              </li>
              <li className="flex items-center gap-3 text-sm font-medium border-b border-slate-100 pb-4">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                Fuld løsning til opbevaring af backup i EU (IAS 24)
              </li>
            </ul>
            <a 
              href="mailto:info@behold-dit-bogforingsprogram.dk" 
              className="block w-full bg-blue-600 text-white text-center py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
              id="cta-buy"
            >
              Kom godt i gang
            </a>
          </div>
        </div>
      </section>

      {/* Constraints Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto" id="krav">
        <div className="mb-16 max-w-2xl" id="krav-header">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Lovens krav til systemet</h2>
          <p className="text-slate-600">Din bogføring skal leve op til 34 krav. Vi har kogt de vigtigste punkter ned her.</p>
        </div>
        
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="krav-grid"
        >
          {requirements.map((krav, idx) => (
            <motion.div 
              key={idx}
              variants={fadeIn}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors shadow-sm group"
              id={`krav-${idx}`}
            >
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <krav.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{krav.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{krav.desc}</p>
              <div className="text-[11px] font-bold text-blue-500 uppercase tracking-widest">{krav.paragraph}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* Software Support */}
      <section className="py-20 bg-slate-100" id="software">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-500 uppercase tracking-widest mb-12">Vi understøtter bl.a.</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default" id="software-logos">
            <span className="text-3xl font-extrabold tracking-tight">Microsoft Business Central - on premise</span>
            <span className="text-3xl font-extrabold tracking-tight">C5</span>
            <span className="text-3xl font-extrabold tracking-tight">Navision</span>
            <span className="text-3xl font-extrabold tracking-tight">XAL</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="om-os">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white grid md:grid-cols-2 gap-16 items-center" id="about-container">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Hvem er vi?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Laursen Consulting ApS er specialister i at rådgive små og mellemstore virksomheder. Vi forstår vigtigheden af sammenhængen mellem kvalitet og pris.
            </p>
            <div className="bg-blue-600/20 border border-blue-600/30 p-8 rounded-3xl relative" id="expert-note">
              <Info className="absolute -top-4 -left-4 bg-blue-600 w-10 h-10 p-2 rounded-xl" />
              <p className="italic text-lg font-medium leading-relaxed">
                "Dennis skrev bekendtgørelserne om digital bogføring, da han var ansat som chefkonsulent i Erhvervsstyrelsen. Vi kender derfor kravene bedre end de fleste."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4" id="consultants">
            <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
              <h4 className="font-bold text-xl mb-1">Dennis Lindberg Laursen</h4>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Jurist & Ejer</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
              <h4 className="font-bold text-xl mb-1">Jossiane Laursen</h4>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Jurist & Ejer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section (Moved to end) */}
      <section className="bg-white py-24" id="warning">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-amber-50 border-2 border-amber-100 p-12 rounded-[2.5rem]"
          >
            <AlertCircle className="w-16 h-16 text-amber-600 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900">
              Bøder op til <span className="text-amber-600 italic text-4xl md:text-6xl block mt-2">1,5 mio. kr.</span>
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
              Folketinget har bestemt, at danske selskaber og visse enkeltmandsvirksomheder (over 300.000 kr. omsætning) SKAL bruge et digitalt bogføringssystem. Kravene gælder allerede for selskaber, og fra 1. januar 2026 for enkeltmandsvirksomheder.
            </p>
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Kilder: Bogføringslovens § 33 og bekendtgørelse nr. 205
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-20 px-6 md:px-12" id="footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12" id="footer-content">
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-600 w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-slate-800">Behold dit bogføringsprogram</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Udbydes af Laursen Consulting ApS. Dansk firma med base i København, der hjælper SMV'er med lovmæssig digitalisering.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest text-slate-400">Kontakt</h5>
              <div className="space-y-3">
                <a href="mailto:info@behold-dit-bogforingsprogram.dk" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600">
                  <Mail className="w-4 h-4" /> E-mail
                </a>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Store Kongensgade 85, 4. sal<br />1264 København K</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest text-slate-400">Firma Info</h5>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Laursen Consulting ApS</p>
                <p>CVR-nr: 4124 2647</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 text-slate-400 text-xs flex flex-col md:flex-row justify-center gap-4">
          <p>© 2024 Laursen Consulting ApS. Alle rettigheder forbeholdes.</p>
        </div>
      </footer>
    </div>
  );
}

const requirements = [
  {
    title: 'Registreringsdata',
    desc: 'Systemet skal indeholde felter til transaktionsdato (fx betalingsdato eller købsdato), beløb, bilagsnummer, transaktionstekst og kurs hvis i andet end DKK.',
    paragraph: 'Bekendtgørelsens § 3, stk. 1',
    icon: Database
  },
  {
    title: 'Transaktionsdata',
    desc: 'Hver transaktion skal tildeles en registreringsdato, et fortløbende transaktionsnummer/id og initialer på personen eller programmet bag.',
    paragraph: 'Bekendtgørelsens § 3, stk. 2',
    icon: FileDigit
  },
  {
    title: 'Beskyttelse af data',
    desc: 'Systemet skal gemme ændringer. Fejlposteringer skal rettes ved nye posteringer. Brugere må ikke kunne ændre eller slette posterede data.',
    paragraph: 'Bekendtgørelsens § 3, stk. 3',
    icon: ShieldCheck
  },
  {
    title: 'It-sikkerhed',
    desc: 'Systemet skal opfylde anerkendte standarder for it-sikkerhed, herunder styring af brugeradgang og logs.',
    paragraph: 'Bogføringslovens § 15',
    icon: ShieldCheck
  },
  {
    title: 'Opbevaring af bilag',
    desc: 'Kan opbevare dokumentation med udstedelsesdato, leverancens art, beløb, afsender/modtager (navn, adresse, CVR) og momsoplysninger.',
    paragraph: 'Bekendtgørelsens § 3, stk. 4',
    icon: FileText
  },
  {
    title: 'Backup hos 3. part',
    desc: 'Ugentlig sikkerhedskopi skal tages og opbevares hos en ikke-nærtstående part på en server i et EU- eller EØS-land.',
    paragraph: 'Bekendtgørelsens § 4',
    icon: Share2
  },
  {
    title: 'E-fakturering',
    desc: 'Automatisk afsendelse og modtagelse af e-fakturaer og kreditnotaer i OIOUBL-format via Nemhandel eller Peppol BIS-format.',
    paragraph: 'Bekendtgørelsens § 5',
    icon: Euro
  },
  {
    title: 'SAF-T Fildeling',
    desc: 'Understøtter fildeling ved at kunne generere en SAF-T-fil efter Erhvervsstyrelsens gældende definitioner.',
    paragraph: 'Bekendtgørelsens § 5',
    icon: Share2
  },
  {
    title: 'Bankafstemning',
    desc: 'Understøtter afstemning med bankkonto og skal tydeligt fremhæve differencer, hvis en postering ikke stemmer.',
    paragraph: 'Bekendtgørelsens § 5',
    icon: ShieldCheck
  }
];

const testimonials = [
  {
    text: "Jeg er imponeret over den simple løsningsmodel, som I er kommet frem til. Genialt!",
    author: "Kim Erik Thomsen, Managing Director, Logic IO"
  },
  {
    text: "En simpel og let løsning som bragte os helt i mål med at opfylde bogføringslovens krav.",
    author: "Jesper Tejls, Salgschef, Trendenz ApS"
  },
  {
    text: "Jeg kan stærkt anbefale løsningen. Det er en simpel, genial og gennemtænkt model til en nærmest foræringspris.",
    author: "Uddrag fra Trustpilot"
  }
];
