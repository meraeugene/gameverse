export interface Product {
  id?: number;
  genre?: string;
  releasedYear?: number;
  title?: string;
  images?: string[];
  location?: string;
  name?: string;
  price?: number;
  stocks?: number;
  quantity?: number;
  likes?: number;
  sold?: number;
  brand?: string;
  category?: string;
}

export interface CartState {
  cartState: boolean;
  cartItems: Product[];
  cartTotalAmount: number;
}

export interface Games {
  genre: string;
  id: number;
  title: string;
  platform: string;
  platforms?: string[];
  image: string;
  price: number;
  sold: number;
  likes: number;
  releasedYear: number;
  hash: string;
}

export interface GameInfo {
  id: number;
  title: string;
  likes: number;
  releasedYear: number;
  genre: string;
  platform?: string;
  platforms: string[]; // Assuming platforms is an array of strings
  image?: string; // Optional property
  sold?: number; // Optional property
  price?: number; // Optional property
  hash: string;
}

export interface Platform {
  name: string;
  location: string;
  price: number;
  sold: number;
  stocks: number;
  hash: string;
}

export interface SelectedGame {
  genre: string;
  title: string;
  id: number;
  likes: number;
  releasedYear: number;
  price?: number;
  platforms: Platform[];
}

export interface SearchResults {
  category: string;
  items?: {
    category: string;
    genre?: string;
    id: number;
    likes: number;
    platforms?: {
      name: string;
      location: string;
      stocks: number;
      price: number;
      sold: number;
    }[];
    releasedYear?: number;
    title: string;
  }[];
}
