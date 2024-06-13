export const animations = {
  hello: {
    x: [0, 5, 0],
    rotate: [-5, 0, -5],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  blink: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
  scroll: {
    y: [-10, 10, -10],
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
export const scrollAnimation = {
  left_initial: {
    x: -300,
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
  left_animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
  right_initial: {
    x: 300,
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
  right_animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
  bottom_initial: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
  bottom_animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};
