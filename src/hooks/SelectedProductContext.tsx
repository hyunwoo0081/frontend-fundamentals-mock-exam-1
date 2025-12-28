import { createContext, useState, useContext, ReactNode } from 'react';

interface ProductId {
  id: string;
}

interface SelectedProductContextType {
  selectedProduct: ProductId[];
  addSelectedProduct: (productId: string) => void;
  removeSelectedProduct: (productId: string) => void;
  toggleSelectedProduct: (productId: string) => void;
}

const SelectedProductContext = createContext<SelectedProductContextType | null>(null);

export function SelectedProductProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductId[]>([]);

  const addSelectedProduct = (productId: string) => {
    setSelectedProduct(prev => Array.from(new Set([...prev, { id: productId }])));
  };

  const removeSelectedProduct = (productId: string) => {
    setSelectedProduct(prev => prev.filter(product => product.id !== productId));
  };

  const toggleSelectedProduct = (productId: string) => {
    if (selectedProduct.some(product => product.id === productId)) {
      removeSelectedProduct(productId);
    } else {
      addSelectedProduct(productId);
    }
  };

  return (
    <SelectedProductContext.Provider
      value={{ selectedProduct, addSelectedProduct, removeSelectedProduct, toggleSelectedProduct }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
}

export function useSelectedProduct() {
  const context = useContext(SelectedProductContext);
  if (!context) {
    throw new Error('useSelectedProduct must be used within a SelectedProductProvider');
  }
  return context;
}
