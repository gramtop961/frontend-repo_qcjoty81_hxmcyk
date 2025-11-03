import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = React.useState([]);

  const handleAdd = (product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleInc = (id) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const handleDec = (id) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)));
  const handleRemove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const handleCheckout = () => {
    alert('Checkout is mocked for demo. Add real payment later.');
  };

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen bg-[radial-gradient(60%_60%_at_80%_0%,rgba(16,185,129,0.08),transparent),radial-gradient(40%_40%_at_0%_100%,rgba(132,204,22,0.07),transparent)]">
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={cartCount} onSearch={setSearchQuery} />

      <main>
        <Hero onShop={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} />

        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 bg-white">
                <Truck className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-semibold">Fast, tracked shipping</p>
                  <p className="text-sm text-black/60">Ships in 24-48h worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 bg-white">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-semibold">Museum-grade paper</p>
                  <p className="text-sm text-black/60">Thick, matte, archival inks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 bg-white">
                <RefreshCw className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-semibold">Free 30-day returns</p>
                  <p className="text-sm text-black/60">Risk-free. Love it or return it</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductGrid onAdd={handleAdd} query={searchQuery} />

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
                    alt="Crocodile inspired design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-black">CROCO — born from the streets</h3>
                <p className="mt-4 text-black/70">
                  We blend graffiti culture with the primal edge of crocodiles to craft prints that snap. Each poster is
                  designed by independent artists, produced sustainably, and shipped ready to frame.
                </p>
                <ul className="mt-6 space-y-2 text-black/80 list-disc list-inside">
                  <li>Limited runs with hand-numbered editions</li>
                  <li>Premium inks on museum-quality stock</li>
                  <li>Every order plants mangroves in croc habitats</li>
                </ul>
                <a href="#shop" className="mt-6 inline-block px-5 py-3 rounded-md bg-black text-white font-medium hover:bg-black/90">Browse posters</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} CROCO — Street art posters with bite.</p>
          <div className="flex items-center gap-3 text-sm text-black/70">
            <a href="#about" className="hover:text-black">About</a>
            <span>•</span>
            <a href="#shop" className="hover:text-black">Shop</a>
            <span>•</span>
            <a href="#" className="hover:text-black">Policies</a>
          </div>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onInc={handleInc}
        onDec={handleDec}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
