import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="grid"
        transition={{ type: "tween", duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
