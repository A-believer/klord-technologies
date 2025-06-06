import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const iconVariants = {
  initial: (direction) => ({
    opacity: 0,
    rotate: direction > 0 ? -90 : 90,
    y: direction > 0 ? 40 : -40,
    scale: 0.8,
  }),
  animate: {
    opacity: 1,
    rotate: 0,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  exit: (direction) => ({
    opacity: 0,
    rotate: direction > 0 ? 90 : -90,
    y: direction > 0 ? -40 : 40,
    scale: 0.9,
    transition: { duration: 0.3 },
  }),
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleToggle = () => {
    setDirection(isDark ? -1 : 1);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className="transition-colors duration-300 relative w-8 h-8 flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {isDark ? (
          <motion.span
            key="sun"
            custom={direction}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-center text-yellow-600 my-auto cursor-pointer"
          >
            <Sun />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            custom={direction}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-center text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            <Moon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;