'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

export default function SkillIcon({ skill, color, index }: { skill: Skill; color: string; index: number }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-2 w-[74px]"
      initial={{ opacity: 0, scale: 0.4, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center cursor-default"
        style={{ background: `${color}14`, border: `1px solid ${color}33` }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3 + (index % 3),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.18
        }}
        whileHover={{
          scale: 1.18,
          rotate: 4,
          boxShadow: `0 0 24px ${color}66`,
          transition: { duration: 0.25 }
        }}
      >
        <iconify-icon icon={skill.icon} width="24" style={{ color }} />
        <motion.span
          className="absolute inset-0 rounded-2xl"
          style={{ border: `1px solid ${color}` }}
          initial={{ opacity: 0, scale: 1 }}
          whileHover={{ opacity: [0, 0.6, 0], scale: 1.35 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
      <span className="text-[10px] font-mono text-slate-500 text-center leading-tight group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
}