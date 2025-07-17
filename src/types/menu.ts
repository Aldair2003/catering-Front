export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  allergens?: string[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  ingredients: Ingredient[];
  preparationTime: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MenuFilter {
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price' | 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
} 