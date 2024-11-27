import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export const DaysCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xs mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-4 text-center"
    >
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
        <Gift className="w-4 h-4 text-pink-500" />
        <span>9.496 dias perfeitos!</span>
      </div>
    </motion.div>
  );
};