import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';


export default function AnimatedNumber({toNumber}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, toNumber, { duration: 3 });

    return animation.stop;
  }, [count, toNumber]);

  return <motion.span>{rounded}</motion.span>;
}


