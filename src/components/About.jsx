import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre-mi" className="w-full max-w-[1100px] mx-auto px-6 py-24 font-sans text-ink">
      
      {/* SECCIÓN 1: ABOUT ME */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center mb-24">
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-bold mb-8">Sobre mí</h2>
          
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Soy estudiante de cuarto año de Ingeniería en Desarrollo de Software en la UNIVO. 
              Mi enfoque principal está en construir soluciones web escalables, abarcando desde 
              el diseño de bases de datos sólidas hasta interfaces limpias y optimizadas.
            </p>
            <p>
              Cuando no estoy programando, me encontrarás entrenando fuerza o calistenia, leyendo 
              ciencia ficción, viendo clásicos de Studio Ghibli, o pasando tiempo con mis perros, Kiki y Loki.
            </p>
            <p>
              Siempre me entusiasma trabajar en proyectos que me reten a crecer, mejorar la 
              arquitectura del código y aprender algo nuevo.
            </p>
          </div>
        </div>

        {/* Ilustración Pixel Art (Mascota / Kiki & Loki vibe) */}
        <div className="hidden md:flex justify-center items-center relative">
          <motion.div 
            animate={{ y: [-5, 5, -5] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-accent"
          >
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
              {/* Orejas */}
              <rect x="5" y="4" width="2" height="2" />
              <rect x="4" y="5" width="2" height="3" />
              <rect x="17" y="4" width="2" height="2" />
              <rect x="18" y="5" width="2" height="3" />
              {/* Cabeza */}
              <rect x="5" y="8" width="14" height="8" />
              <rect x="4" y="10" width="1" height="4" />
              <rect x="19" y="10" width="1" height="4" />
              {/* Ojos */}
              <rect x="7" y="10" width="2" height="2" className="text-bg" />
              <rect x="15" y="10" width="2" height="2" className="text-bg" />
              {/* Cuerpo / Cuello */}
              <rect x="8" y="16" width="8" height="4" />
              {/* Cola */}
              <rect x="2" y="14" width="2" height="2" />
              <rect x="3" y="16" width="5" height="2" />
              {/* Detalles flotantes */}
              <rect x="2" y="4" width="1" height="1" className="opacity-50" />
              <rect x="20" y="2" width="1" height="1" className="opacity-50" />
              <rect x="21" y="18" width="1" height="1" className="opacity-50" />
              <rect x="5" y="21" width="1" height="1" className="opacity-50" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* SECCIÓN 2: HABILIDADES & TECNOLOGÍAS */}
      <div className="mb-24">
        <h2 className="font-display text-3xl font-bold mb-10">Habilidades y Tecnologías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-surface/50 border border-white/5 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-6">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {['C#', '.NET', 'Node.js', 'Express', 'Laravel', 'Spring Boot'].map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-accent text-accent text-sm bg-accent/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface/50 border border-white/5 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Vue 3', 'Tailwind', 'React Native', 'Expo', 'WordPress'].map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-accent text-accent text-sm bg-accent/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface/50 border border-white/5 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-6">Datos & Otros</h3>
            <div className="flex flex-wrap gap-3">
              {['SQL Server', 'MongoDB', 'PostgreSQL', 'Power BI', 'Git/Github'].map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-accent text-accent text-sm bg-accent/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* SECCIÓN 3: EXPERIENCIA (Timeline) */}
      <div>
        <h2 className="font-display text-3xl font-bold mb-10">Experiencia</h2>
        
        <div className="relative pl-4 md:pl-0">
          {/* Línea vertical del timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>

          <div className="space-y-12">
            
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="z-10 flex items-center justify-center bg-accent text-bg font-bold rounded-full w-16 h-16 shrink-0 shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)]">
                2026
              </div>
              <div className="bg-surface/50 border border-white/5 rounded-xl p-6 md:p-8 flex-1 mt-2 md:mt-0">
                <h3 className="text-xl font-bold mb-1">Desarrolladora Web (Pasantía)</h3>
                <p className="text-accent text-sm mb-4">en Equimed</p>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  Optimización de rendimiento web, configuración de Redis Object Cache, mejoras de UI con Elementor y optimización de medios con Cloudinary en entornos WordPress y WooCommerce.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="z-10 flex items-center justify-center bg-accent text-bg font-bold rounded-full w-16 h-16 shrink-0 shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)]">
                2025
              </div>
              <div className="bg-surface/50 border border-white/5 rounded-xl p-6 md:p-8 flex-1 mt-2 md:mt-0">
                <h3 className="text-xl font-bold mb-1">Data Analyst Junior</h3>
                <p className="text-accent text-sm mb-4">en Kodigo / INCAF</p>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  <a href='https://www.credly.com/badges/fef120e7-acd6-4a13-a2ef-65950c663f3f/accept_via_choose_sign_up'>Graduada del programa de análisis de datos. Obtención de la certificación Profesional en Análisis de Inteligencia de Negocios (BIAPC) por Certiprof  </a>
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="z-10 flex items-center justify-center bg-accent text-bg font-bold rounded-full w-16 h-16 shrink-0 shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)]">
                2025
              </div>
              <div className="bg-surface/50 border border-white/5 rounded-xl p-6 md:p-8 flex-1 mt-2 md:mt-0">
                <h3 className="text-xl font-bold mb-1">Práctica Profesional</h3>
                <p className="text-accent text-sm mb-4">en Alcaldía de San Miguel</p>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  Desarrollo de módulos para el cálculo de recibos de impuestos utilizando Laravel, mejorando la eficiencia y precisión en la gestión tributaria municipal.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}