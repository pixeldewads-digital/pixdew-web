'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { basePath } from '../../../next.config';
import Container from '../Container/Container';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-sky-400 text-center text-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mb-8"
          >
            <Image
              src={`${basePath || ''}/maskot/Dewbit.svg`}
              alt="Dewbit Mascot"
              width={128}
              height={128}
              className="mx-auto"
            />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Dari Satu Pixel, Lahirlah ide besar.
          </h1>

          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl transition-all shadow-sm hover:shadow-md">
            Get Started
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
