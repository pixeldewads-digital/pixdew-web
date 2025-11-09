'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-sky-400">
      <Container>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mx-auto w-24 h-24"
            >
              <img
                src="../public/logo/maskot/dewbit.svg"
                alt="Dewbit Mascot"
                width={100}
                height={100}
              />
            </motion.div>
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
