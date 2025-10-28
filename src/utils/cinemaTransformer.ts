interface ApiCinema {
  id: string;
  name: string;
  city: string;
  province: string;
  lat: number;
  lon: number;
  tags: Record<string, any>;
}

interface Cinema {
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

export const transformCinemaData = (apiCinema: ApiCinema): Cinema => {
  return {
    id: apiCinema.id,
    name: apiCinema.name,
    city: apiCinema.city,
    address: apiCinema.tags?.["addr:street"] || apiCinema.tags?.["addr:full"] || "",
    latitude: apiCinema.lat,
    longitude: apiCinema.lon,
    screens: apiCinema.tags?.["cinema:screens"]
      ? parseInt(apiCinema.tags["cinema:screens"])
      : undefined,
    province: apiCinema.province,
    tags: apiCinema.tags,
  };
};

export const transformCinemasArray = (apiCinemas: ApiCinema[]): Cinema[] => {
  return apiCinemas.map(transformCinemaData);
};
