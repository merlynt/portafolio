import { motion } from 'framer-motion';
import { rise, stagger } from '../lib/motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-bg text-ink font-sans flex flex-col">
      {/* Navegación superior */}
      <header className="w-full max-w-[1200px] mx-auto px-6 py-8 flex items-center justify-between">
        <div className="font-display text-2xl font-bold italic text-accent tracking-wider">
          merly.nt
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="text-accent transition-colors">Inicio</a>
          <a href="#sobre-mi" className="text-ink/70 hover:text-ink transition-colors">Sobre mí</a>
          <a href="#proyectos" className="text-ink/70 hover:text-ink transition-colors">Proyectos</a>
        </nav>
      </header>

      {/* Contenido principal centrado */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center max-w-3xl">
          
          {/* Badge superior */}
          <motion.div
            variants={rise}
            className="mb-8 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-ink/80 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            Estudiante de cuarto año
          </motion.div>

          {/* Título principal */}
          <motion.h1
            variants={rise}
            className="mb-4 font-display text-[clamp(3rem,8vw,5.5rem)] font-bold leading-tight tracking-tight text-ink"
          >
            ¡Hola! , soy <span className="text-accent">Merlyn</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.h2
            variants={rise}
            className="mb-8 font-sans text-[clamp(1.75rem,4vw,3rem)] font-semibold text-ink/90"
          >
            Desarrolladora backend
          </motion.h2>

          {/* Párrafo descriptivo */}
          <motion.p
            variants={rise}
            className="mb-12 max-w-2xl text-balance text-base md:text-lg leading-relaxed text-muted"
          >
            Construyo software que escala e interfaces que se entienden. 
            Diseño APIs modulares y optimizo experiencias web, del backend al último detalle de interfaz.
          </motion.p>

          {/* Botones de acción */}
          <motion.div variants={rise} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-full sm:w-48 items-center justify-center rounded-full bg-accent text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            >
              Ver proyectos
            </motion.a>
            <motion.a
              href="/cv-nicole.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-full sm:w-48 items-center justify-center rounded-full border border-accent bg-transparent text-sm font-medium text-ink transition-colors hover:bg-accent/10"
            >
              Descargar CV
            </motion.a>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}