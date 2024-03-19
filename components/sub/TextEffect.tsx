import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'solução',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'experiência',
        2000,
        'jornada',
        2000,
        
      ]}
      
      speed={30}
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      repeat={Infinity}
    />
  );
};

export default TextEffect;