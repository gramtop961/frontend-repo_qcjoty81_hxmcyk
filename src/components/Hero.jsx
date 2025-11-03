import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(16,185,129,0.20),transparent_60%),radial-gradient(50%_50%_at_80%_20%,rgba(132,204,22,0.25),transparent_60%),radial-gradient(40%_40%_at_50%_80%,rgba(5,150,105,0.25),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 text-emerald-400" />
            New Drop: Urban Jungle Series
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70">Street Art</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-700">Posters with Bite</span>
          </h1>
          <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
            CROCO brings the raw energy of the streets to your walls. Bold, modern, and a little bit wild — curated prints inspired by graffiti culture and the crocodile spirit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onShop} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700">
              Shop the collection
              <ChevronRight className="w-4 h-4" />
            </button>
            <a href="#about" className="px-5 py-3 rounded-md bg-white text-black font-medium border border-black/10 hover:bg-black/5">Why CROCO?</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
