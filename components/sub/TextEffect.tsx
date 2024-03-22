import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        
        'solução',
        2000, 
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