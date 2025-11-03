import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

function CartDrawer({ open, onClose, items, onInc, onDec, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between p-4 border-b border-black/10">
              <h3 className="text-lg font-bold">Your Cart</h3>
              <button onClick={onClose} className="p-2 rounded-md hover:bg-black/5">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              {items.length === 0 && (
                <p className="text-black/60">Your cart is empty. Keep exploring the streets.</p>
              )}
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 items-center">
                  <img src={i.image} alt={i.name} className="w-20 h-24 object-cover rounded-md border border-black/10" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold truncate">{i.name}</p>
                        <p className="text-sm text-black/60">${i.price} • Premium matte</p>
                      </div>
                      <button onClick={() => onRemove(i.id)} className="p-1 rounded hover:bg-black/5">
                        <Trash2 className="w-4 h-4 text-black/60" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => onDec(i.id)} className="p-1.5 rounded border border-black/10 hover:bg-black/5">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center">{i.qty}</span>
                      <button onClick={() => onInc(i.id)} className="p-1.5 rounded border border-black/10 hover:bg-black/5">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-black/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-black/70">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <button
                disabled={items.length === 0}
                onClick={onCheckout}
                className="w-full px-4 py-3 rounded-md bg-emerald-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700"
              >
                Checkout
              </button>
              <p className="mt-2 text-xs text-black/50">Secure checkout • Free returns • Printed sustainably</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
