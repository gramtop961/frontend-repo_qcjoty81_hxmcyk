import React from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';

function Navbar({ onCartClick, cartCount, onSearch }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              className="sm:hidden p-2 rounded-md hover:bg-black/5"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 via-lime-500 to-emerald-700 grid place-items-center text-white font-black shadow-lg shadow-emerald-500/30">
                C
              </div>
              <span className="font-extrabold tracking-wider text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-700">
                  CROCO
                </span>
              </span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="hidden sm:flex items-center gap-2 flex-1 max-w-lg mx-6">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search street art posters"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-black/5 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            <button type="submit" className="px-3 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-black/90">
              Search
            </button>
          </form>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-xs bg-black text-white rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="sm:hidden py-3 border-t border-black/10">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/50" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search street art posters"
                  className="w-full pl-10 pr-3 py-2 rounded-md bg-black/5 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <button type="submit" className="px-3 py-2 rounded-md bg-black text-white text-sm font-medium">
                Go
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
