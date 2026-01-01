import { createContext, useState, useContext, ReactNode } from 'react';
import { ProductData } from './useData.tsx';

interface SelectedProductContextType {
  selectedProduct: ProductData|null;
  setSelectedProduct: (product: ProductData) => void;
}

const SelectedProductContext = createContext<SelectedProductContextType | null>(null);

export function SelectedProductProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProd] = useState<ProductData | null>(null);

  const setSelectedProduct = (product: ProductData) => {
    setSelectedProd(prev => {
      if (prev && prev.id === product.id) {
        return null; // Deselect if the same product is selected
      }
      return product;
    });
  };

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
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
