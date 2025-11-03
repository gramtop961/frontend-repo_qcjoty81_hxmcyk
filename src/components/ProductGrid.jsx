import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    id: 'gator-tag',
    name: 'GATOR TAG',
    price: 32,
    image: 'https://images.unsplash.com/photo-1654657639694-49500069ef4f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHQVRPUiUyMFRBR3xlbnwwfDB8fHwxNzYyMTcyNjQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    accent: 'from-emerald-500 to-lime-500',
    desc: 'Graffiti tag layered over croc-scale textures.'
  },
  {
    id: 'urban-jungle',
    name: 'URBAN JUNGLE',
    price: 36,
    image: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-lime-500 to-emerald-700',
    desc: 'Concrete meets jungle — ferocious and fresh.'
  },
  {
    id: 'venom-drip',
    name: 'VENOM DRIP',
    price: 28,
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-emerald-600 to-emerald-900',
    desc: 'Acid drips and neon lines — pure bite.'
  },
  {
    id: 'scale-grid',
    name: 'SCALE GRID',
    price: 30,
    image: 'https://images.unsplash.com/photo-1685110182021-2183e3d9bded?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTQ0FMRSUyMEdSSUR8ZW58MHwwfHx8MTc2MjE3MjY0OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    accent: 'from-emerald-400 to-lime-600',
    desc: 'Minimal geometry with reptilian rhythm.'
  },
];

function ProductGrid({ onAdd, query }) {
  const filtered = React.useMemo(() => {
    const q = (query || '').trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="shop" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black">Featured Posters</h2>
            <p className="text-black/60">Curated pieces with a CROCO twist</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-xl border border-black/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-0 group-hover:opacity-20 transition-opacity`} />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold tracking-wide">{p.name}</h3>
                    <p className="text-sm text-black/60">{p.desc}</p>
                  </div>
                  <span className="shrink-0 font-semibold">${p.price}</span>
                </div>
                <button
                  onClick={() => onAdd(p)}
                  className="mt-4 inline-flex items-center gap-2 w-full justify-center px-4 py-2 rounded-md bg-black text-white hover:bg-black/90"
                >
                  <Plus className="w-4 h-4" /> Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
