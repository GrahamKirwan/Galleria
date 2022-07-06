export const framer_name = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    exit: { opacity: 0},

}

export const framer_bar = (current) => {
    const initial = current * 6.666666666666667
    const animate = initial + 6.666666666666667

    return {
      initial: { width: `${initial}%` },
      animate: { width: `${animate}%` },
      transition: { duration: 0.2 },
    }
  }