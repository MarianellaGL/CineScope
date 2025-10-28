export interface Cinema {
  id: number | string;
  name: string;
  city: string;
  address?: string;
  latitude: number;
  longitude: number;
  screens?: number;
  province?: string;
  tags?: Record<string, any>;
}

export interface ApiCinema {
  id: string;
  name: string;
  city: string;
  province: string;
  lat: number;
  lon: number;
  tags: Record<string, any>;
}
