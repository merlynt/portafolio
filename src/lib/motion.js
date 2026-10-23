
export const spring = { type: 'spring', stiffness: 400, damping: 30, mass: 0.7 };
export const springSoft = { type: 'spring', stiffness: 220, damping: 26 };

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
export const rise = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: springSoft },
};
