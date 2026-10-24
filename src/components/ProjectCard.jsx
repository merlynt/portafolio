import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col bg-[#111113] border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
    >

      <div className="h-56 w-full relative flex items-center justify-center border-b border-white/5 overflow-hidden group bg-surface">

        <img
          src={project.media}
          alt={`Previsualización de ${project.title}`}
          className="absolute inset-0 w-full h-full object-contain object-center opacity-40 group-hover:opacity-80 transition-all duration-500 z-0"
        />

        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 text-xs px-3 py-1 rounded-full text-white/90 z-10 shadow-lg">
          {project.kind}
        </span>

        <div className="relative z-10 text-white/40 font-display font-bold text-2xl md:text-3xl tracking-[0.15em] uppercase text-center px-4 mix-blend-overlay drop-shadow-md">
          {project.title}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-accent/40 text-accent text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.href}
            aria-label={`Ver código de ${project.title}`}
            className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-accent/50 text-accent hover:bg-accent/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.04c3.7-.4 7-2.2 7-8a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0 .1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0 .1 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5.8 3.3 7.6 7 8a4.8 4.8 0 0 0-1 3.1V22"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>


        </div>
      </div>
    </motion.div>
  );
}