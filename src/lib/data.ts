import fs from 'fs/promises';
import path from 'path';
import { Product } from '@/types/product';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'products.json');

export async function getProducts(): Promise<Product[]> {
  try {
    const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(p => p.slug === slug) || null;
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(p => p.id === id) || null;
}

export async function addProduct(product: Omit<Product, 'id' | 'lastUpdated'>): Promise<Product> {
  const products = await getProducts();
  const newProduct: Product = {
    ...product,
    id: String(Date.now()),
    lastUpdated: new Date().toISOString(),
  };
  
  products.push(newProduct);
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(products, null, 2), 'utf-8');
  
  return newProduct;
}

export async function updateProduct(id: string, updates: Partial<Omit<Product, 'id'>>): Promise<Product | null> {
  const products = await getProducts();
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) {
    return null;
  }
  
  products[index] = {
    ...products[index],
    ...updates,
    lastUpdated: new Date().toISOString(),
  };
  
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(products, null, 2), 'utf-8');
  
  return products[index];
}

export async function getDashboardStats() {
  const products = await getProducts();
  
  const lowStockThreshold = 10;
  const lowStockProducts = products.filter(p => p.inventory > 0 && p.inventory <= lowStockThreshold).length;
  const outOfStockProducts = products.filter(p => p.inventory === 0).length;
  const totalInventory = products.reduce((sum, p) => sum + p.inventory, 0);
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  return {
    totalProducts: products.length,
    lowStockProducts,
    outOfStockProducts,
    totalInventory,
    categories,
  };
}
