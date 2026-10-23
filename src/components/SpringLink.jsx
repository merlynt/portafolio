import { motion } from 'framer-motion';
import { spring } from '../lib/motion';

export default function SpringLink({ href, children, external = false, className = '' }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <motion.a
      href={href}
      {...externalProps}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ scale: 0.97 }}
      transition={spring}
      className={`relative inline-flex items-center gap-1 rounded-sm text-sm font-medium text-muted outline-none transition-colors duration-200 hover:text-ink focus-visible:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg ${className}`}
    >
      {children}
      {external && (
        <motion.span
          aria-hidden="true"
          variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
          transition={spring}
        >
          ↗
        </motion.span>
      )}
      <motion.span
        aria-hidden="true"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={spring}
        style={{ originX: 0 }}
        className="absolute -bottom-1 left-0 h-px w-full bg-current"
      />
    </motion.a>
  );
}
