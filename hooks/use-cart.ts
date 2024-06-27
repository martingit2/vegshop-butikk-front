import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';

interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (data: Product) => void;
    increase: (id: string) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    });
                    console.log('Increased quantity of existing item:', existingItem);
                } else {
                    set({ items: [...currentItems, { ...data, quantity: 1 }] });
                    console.log('Added new item:', data);
                }
                console.log('Cart items after add:', get().items);
            },
            increase: (id: string) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                }));
                console.log('Increased quantity of item:', id);
            },
            removeItem: (id: string) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === id);

                if (existingItem && existingItem.quantity > 1) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                        ),
                    });
                } else {
                    set({ items: currentItems.filter((item) => item.id !== id) });
                }
                console.log('Cart items after remove:', get().items);
            },
            removeAll: () => {
                set({ items: [] });
                console.log('Cart items after remove all:', get().items);
            },
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCart;
