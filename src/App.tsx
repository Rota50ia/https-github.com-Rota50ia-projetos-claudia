import { motion } from "motion/react";
import { 
  Music, 
  History, 
  MapPin, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  Maximize2,
  Mic2,
  Users
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-500/30 selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-900 rounded-sm flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xs">SG</span>
            </div>
            <span className="font-serif font-bold tracking-tight text-brand-900">Seus Gestos</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-semibold text-slate-500">
            <a href="#projeto" className="hover:text-brand-600 transition-colors">O Projeto</a>
            <a href="#artistas" className="hover:text-brand-600 transition-colors">Artistas</a>
            <a href="#locais" className="hover:text-brand-600 transition-colors">Apresentações</a>
            <a href="#patrocinio" className="hover:text-brand-600 transition-colors underline underline-offset-4 decoration-brand-500">Patrocínio</a>
          </div>
          <a href="tel:6296363399" className="text-brand-900 p-2 border border-brand-900 rounded-full hover:bg-brand-900 hover:text-white transition-all">
            <Phone size={18} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-brand-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-brand-400">
            <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div {...fadeIn} className="flex items-center gap-4 mb-8">
              <span className="glass-pill">Lei Goyazes 2026</span>
              <span className="glass-pill">Avaliação Ótima</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-9xl font-serif leading-[0.9] mb-8"
            >
              Seus <br /> 
              <span className="italic text-brand-400">Gestos</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-md text-xl text-slate-300 font-light leading-relaxed mb-12"
            >
              Música, memória e reencontro. Um espetáculo que celebra trajetórias artísticas e reafirma a força da música produzida em Goiás.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
              <img 
                src="input_file_1.png" 
                alt="Cláudia Vieira" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-600 p-6 rounded-xl hidden md:block">
              <p className="text-xs uppercase tracking-widest font-bold mb-1">Status</p>
              <p className="text-xl font-serif">Projeto Aprovado</p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-12 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Valor para Captação</p>
              <p className="text-2xl font-serif">R$ 184.043,94</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Artistas Principais</p>
              <p className="text-2xl font-serif">Cláudia Vieira & Felipe Valoz</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Participação Especial</p>
              <p className="text-2xl font-serif font-light">Sérgio Pato</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objective & Importance */}
      <section id="projeto" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="input_file_0.png" 
                alt="Espetáculo Seus Gestos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            variants={staggerContainer} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="flex items-center gap-2 text-brand-600 mb-6">
              <History size={20} />
              <span className="text-xs uppercase font-bold tracking-widest">Objetivo do Reencontro</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl mb-8 leading-tight text-brand-900">
              33 anos depois, a música nos <span className="italic">reaproxima</span>.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed mb-6">
              Promover o reencontro artístico de dois músicos que começaram juntos em 1993. Mais que um show, é a preservação da memória cultural goiana como patrimônio imaterial em movimento.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed">
              O projeto atua como registro vivo da história, mostrando que Goiás produz artistas extraordinários que merecem um sistema de memória consolidado.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Artist Quote / Highlight */}
      <section className="py-24 bg-brand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.blockquote 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="text-9xl font-serif text-brand-200 absolute -top-12 -left-8 pointer-events-none">“</span>
              <p className="text-3xl md:text-5xl font-serif text-brand-900 leading-tight relative z-10 italic">
                Mostrar à marca patrocinadora uma atuação de impacto cultural, além de ser apenas 'mais uma empresa que paga imposto'.
              </p>
              <footer className="mt-8">
                <p className="text-lg font-bold text-brand-600">Cláudia Vieira</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">Intérprete e Proponente</p>
              </footer>
            </motion.blockquote>
          </div>
          <div className="md:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-full overflow-hidden aspect-square border-8 border-white shadow-2xl"
            >
              <img 
                src="input_file_2.png" 
                alt="Cláudia Vieira em Performance" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-brand-50 p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-200/50 rounded-full blur-3xl"></div>
            <h3 className="text-2xl mb-8 font-serif text-brand-900">Conteúdo do Espetáculo</h3>
            <ul className="space-y-6 text-slate-700">
              <li className="flex gap-4">
                <Music className="text-brand-600 shrink-0" size={20} />
                <span>Releituras sensíveis da MPB e experimentações vocais.</span>
              </li>
              <li className="flex gap-4">
                <Maximize2 className="text-brand-600 shrink-0" size={20} />
                <span>Arranjos autorais entre tradição e contemporaneidade.</span>
              </li>
              <li className="flex gap-4">
                <Mic2 className="text-brand-600 shrink-0" size={20} />
                <span>6 apresentações gratuitas em locais emblemáticos.</span>
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-brand-200">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">Reconhecimento Técnico</p>
              <p className="text-sm text-slate-500">Mérito artístico-cultural, consistência técnica e impacto positivo na difusão do patrimônio.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section id="locais" className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-brand-900">Locais de Passagem</h2>
            <p className="text-slate-500 tracking-widest uppercase text-xs">Onde a memória se faz presente</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Beco da Codorna", desc: "Arte urbana e história" },
              { name: "Trem Azul Música & Bar", desc: "Reduto da canção" },
              { name: "Muzza Jazz Clube", desc: "Elegância instrumental" },
              { name: "Zimbro Cocktails & Co", desc: "Mixologia e cultura" }
            ].map((local, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-brand-300 transition-colors"
              >
                <MapPin className="text-brand-400 mb-4 group-hover:text-brand-600 transition-colors" />
                <h4 className="text-xl font-serif mb-2 text-brand-900">{local.name}</h4>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{local.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section id="patrocinio" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-900">
                Por que <span className="italic text-brand-600">Patrocinar</span>?
              </h2>
              <p className="text-slate-600 mb-12 leading-relaxed text-lg">
                A Lei Goyazes permite transformar imposto em legado. Patrocinar "Seus Gestos" é um aporte relevante e duradouro à identidade de Goiás.
              </p>
              <div className="p-8 bg-brand-900 text-white rounded-3xl">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">Contato para Patrocínio</p>
                <p className="text-xl font-serif mb-1">Sérgio Pato</p>
                <p className="font-mono text-lg flex items-center gap-2">
                  <Phone size={16} /> 62 9636-3399
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <TrendingUp className="text-sky-500" />,
                  title: "Visibilidade Qualificada",
                  text: "Exposição da marca em peças promocionais, mídias digitais, releases e créditos oficiais."
                },
                { 
                  icon: <Award className="text-amber-500" />,
                  title: "Posicionamento Cultural",
                  text: "Associação a um projeto de alta relevância com avaliação 'Ótima' pela Lei Goyazes."
                },
                { 
                  icon: <ShieldCheck className="text-emerald-500" />,
                  title: "Reputação Social",
                  text: "Reconhecimento como incentivador e preservador do patrimônio artístico goiano."
                },
                { 
                  icon: <Users className="text-indigo-500" />,
                  title: "Relacionamento",
                  text: "Ações de hospitalidade, ativações institucionais e conteúdo exclusivo para redes sociais."
                }
              ].map((benefit, idx) => (
                <div key={idx} className="p-10 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-serif mb-4 text-brand-900">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 px-6 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 uppercase text-[10px] tracking-[0.3em] text-white/40">
                  <th className="pb-8 font-semibold">Fator de Diferencial</th>
                  <th className="pb-8 font-semibold">Seus Gestos</th>
                  <th className="pb-8 font-semibold">Projeto Médio</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-white/10">
                  <td className="py-10 text-xl font-light">Relevância Histórica</td>
                  <td className="py-10 text-3xl italic">33 anos de trajetória</td>
                  <td className="py-10 text-lg text-white/40">Geralmente sem lastro</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-10 text-xl font-light">Circulação</td>
                  <td className="py-10 text-3xl italic">6 apresentações</td>
                  <td className="py-10 text-lg text-white/40">1-2 eventos</td>
                </tr>
                <tr>
                  <td className="py-10 text-xl font-light">Segurança Institucional</td>
                  <td className="py-10 text-3xl italic">Aprovado e Exequível</td>
                  <td className="py-10 text-lg text-white/40">Variável</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="py-32 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-12 text-brand-900 leading-tight">
              Faça parte desse <br /> 
              <span className="italic">reencontro artístico</span>.
            </h2>
            <p className="text-slate-500 mb-12 text-lg">
              Clique abaixo para falar com Sérgio Pato e formalizar seu apoio ao patrimônio cultural de Goiás.
            </p>
            <a 
              href="https://wa.me/556296363399" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brand-900 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-brand-600 transition-all hover:scale-105"
            >
              Falar com Sérgio Pato <ArrowRight size={20} />
            </a>
          </motion.div>
          
          <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs uppercase tracking-widest text-slate-400">© 2026 Seus Gestos – Goiás, Brasil</p>
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-900">
              <span>Cláudia Vieira</span>
              <span>Felipe Valoz</span>
              <span>Sérgio Pato</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
