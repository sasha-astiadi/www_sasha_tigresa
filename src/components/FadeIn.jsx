'use client'

import { motion } from 'framer-motion'

export default function FadeIn({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
