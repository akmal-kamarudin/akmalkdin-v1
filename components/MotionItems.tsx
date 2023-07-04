import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type MotionProps = {
  children: ReactNode;
  itemKey: number;
};

const MotionItems = ({ children, itemKey }: MotionProps): JSX.Element => {
  const ref = useRef(null);
  const animate = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const variants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };
  const transition = {
    ease: "easeOut",
    delay: (itemKey + 2) * 0.1,
    duration: 0.4,
    damping: 10,
    mass: 1,
  };

  useEffect(() => {
    if (isInView) {
      animate.start("show");
      console.log(itemKey);
    }
  }, [animate, isInView, itemKey]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionItems;
