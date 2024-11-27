import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { Modal } from './components/Modal';
import { PrizeWheel } from './components/PrizeWheel';
import { PrizeModal } from './components/PrizeModal';
import { Prize } from './types/Prize';
import { DaysCard } from './components/DaysCard';

function App() {
  const [showWheel, setShowWheel] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);

  const handlePrizeSelected = (prize: Prize) => {
    setShowWheel(false);
    setTimeout(() => setSelectedPrize(prize), 300);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`🎉 No meu aniversário, girei a roleta e ganhei: ${selectedPrize?.name}\n\n"${selectedPrize?.message}"`);
    window.open(`https://wa.me/5547999035690?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 gap-8">
      <div className="max-w-md w-full mx-auto">
        {!showWheel && !selectedPrize && (
          <motion.div
            className="text-center"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-4 leading-tight">
              Feliz Aniversário,<br />Michelly dos olhos bonitos!
            </h1>
            <p className="text-gray-600 mb-8">clique no presente para desbloquear sua surpresa</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-full p-8 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setShowWheel(true)}
            >
              <Gift size={48} className="text-pink-500" />
            </motion.button>
          </motion.div>
        )}

        <Modal isOpen={showWheel} onClose={() => setShowWheel(false)}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Gire a Roleta!
            </h2>
            <p className="text-gray-600 mb-8">Vamos ver o que o destino reservou para você...</p>
            <div className="flex justify-center">
              <PrizeWheel onPrizeSelected={handlePrizeSelected} />
            </div>
          </div>
        </Modal>

        <Modal isOpen={!!selectedPrize} onClose={() => setSelectedPrize(null)}>
          {selectedPrize && <PrizeModal prize={selectedPrize} onShare={shareOnWhatsApp} />}
        </Modal>
      </div>
      
      <DaysCard />
    </div>
  );
}

export default App;