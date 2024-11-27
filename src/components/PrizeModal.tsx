import React from 'react';
import { motion } from 'framer-motion';
import { Prize } from '../types/Prize';
import { Share2 } from 'lucide-react';

interface PrizeModalProps {
  prize: Prize;
  onShare: () => void;
}

export const PrizeModal: React.FC<PrizeModalProps> = ({ prize, onShare }) => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-6xl filter drop-shadow-lg">{prize.emoji}</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          {prize.name}
        </h3>
        
        <p className="text-gray-600 mb-8 italic">
          "{prize.message}"
        </p>

        <button
          onClick={onShare}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <Share2 size={20} />
          Compartilhar no WhatsApp
        </button>
      </motion.div>
    </div>
  );
};