import { Prize } from '../types/Prize';

export const prizes: Prize[] = [
  { 
    name: 'Um abraço', 
    chance: 19, 
    emoji: '🤗', 
    color: '#FF69B4',
    message: 'Um abraço apertado cheio de carinho, porque você merece todo o afeto do mundo.'
  },
  { 
    name: 'Um Beijo', 
    chance: 25, 
    emoji: '💋', 
    color: '#FF1493',
    message: 'Um beijo especial para alguém que ilumina os lugares por onde passa com seus olhos.'
  },
  { 
    name: 'Um presente', 
    chance: 5, 
    emoji: '🎁', 
    color: '#9370DB',
    message: 'Uma surpresa especial para celebrar esse dia único.'
  },
  { 
    name: 'Dois presentes', 
    chance: 1, 
    emoji: '🎁🎁', 
    color: '#8A2BE2',
    message: 'Dupla dose de carinho, porque você merece em dobro!'
  },
  { 
    name: 'Nada', 
    chance: 25, 
    emoji: '😅', 
    color: '#A9A9A9',
    message: 'Às vezes a vida é assim... mas seu sorriso já é um presente!'
  },
  { 
    name: 'Nada x2', 
    chance: 25, 
    emoji: '😅😅', 
    color: '#808080',
    message: 'Duplo azar, mas hey, pelo menos você tem meu carinho'
  },
];