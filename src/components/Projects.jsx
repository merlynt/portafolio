import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard'; 

export default function Projects() {
  return (
    <section id="proyectos" className="w-full max-w-[1200px] mx-auto px-6 py-24 font-sans text-ink">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-4 text-ink"
        >
          Mis Proyectos
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-base md:text-lg"
        >
          Una colección de proyectos en los que he trabajado, abarcando desde el diseño de bases de datos sólidas y APIs RESTful hasta interfaces web optimizadas.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
      
    </section>
  );
}