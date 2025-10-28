import type { Cinema, ApiCinema } from "../types/cinema";

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
