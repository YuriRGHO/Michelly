import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { prizes } from '../data/prizes';
import { Gift } from 'lucide-react';

interface PrizeWheelProps {
  onPrizeSelected: (prize: typeof prizes[number]) => void;
}

export const PrizeWheel: React.FC<PrizeWheelProps> = ({ onPrizeSelected }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    
    const random = Math.random() * 100;
    let cumulative = 0;
    let selectedPrize = prizes[prizes.length - 1];
    
    for (const prize of prizes) {
      cumulative += prize.chance;
      if (random <= cumulative) {
        selectedPrize = prize;
        break;
      }
    }

    const prizeIndex = prizes.indexOf(selectedPrize);
    const baseRotation = 360 * 5;
    const prizeRotation = (360 / prizes.length) * prizeIndex;
    const finalRotation = baseRotation + prizeRotation;

    setRotation(rotation + finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      onPrizeSelected(selectedPrize);
    }, 5000);
  };

  return (
    <div className="relative w-80 h-80">
      {/* Pointer */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-4 h-8 bg-gradient-to-b from-pink-500 to-violet-500 rounded-t-full" />
      </div>

      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-100 to-violet-100 p-1">
        <motion.div
          className="w-full h-full rounded-full bg-white shadow-inner relative overflow-hidden"
          style={{ 
            background: 'conic-gradient(from 0deg, ' + 
              prizes.map((prize, i) => 
                `${prize.color}20 ${(i * 100) / prizes.length}% ${((i + 1) * 100) / prizes.length}%`
              ).join(', ') + ')'
          }}
          animate={{ rotate: rotation }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          {prizes.map((prize, i) => (
            <div
              key={i}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${(i * 360) / prizes.length}deg)`,
                transformOrigin: 'center',
              }}
            >
              <div 
                className="absolute left-1/2 top-0 -translate-x-1/2 text-center w-full"
                style={{ transform: 'translateY(25%)' }}
              >
                <span className="text-sm font-medium text-gray-700">{prize.emoji}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 p-1 z-20">
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className="w-full h-full rounded-full bg-white flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold hover:scale-105 transform transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Gift className="w-8 h-8 stroke-pink-500" />
        </button>
      </div>
    </div>
  );
};