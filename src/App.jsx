import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

export default function App() {
  return (
    // reducedMotion="user": respeta prefers-reduced-motion (desactiva transformaciones).
    <MotionConfig reducedMotion="user">
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </MotionConfig>
  );
}
