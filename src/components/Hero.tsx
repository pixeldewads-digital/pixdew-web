'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-sky-400">
      <Container>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <motion.img
              src="/maskot/Dewbit.svg"
              alt="Dewbit Mascot"
              className="mx-auto"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mt-8">
              Dari Satu Pixel, Lahirlah ide besar.
            </h1>
            <button className="mt-8 btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
