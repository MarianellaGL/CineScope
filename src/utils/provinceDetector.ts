interface Province {
  name: string;
  bounds: {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
  };
}

const argentineProvinces: Province[] = [
  {
    name: "Buenos Aires",
    bounds: { minLat: -39.0, maxLat: -33.0, minLng: -63.0, maxLng: -56.0 }
  },
  {
    name: "Córdoba",
    bounds: { minLat: -34.5, maxLat: -29.0, minLng: -65.5, maxLng: -61.5 }
  },
  {
    name: "Rosario",
    bounds: { minLat: -33.5, maxLat: -32.5, minLng: -61.0, maxLng: -60.0 }
  },
  {
    name: "Mendoza",
    bounds: { minLat: -37.0, maxLat: -32.0, minLng: -70.0, maxLng: -66.0 }
  },
  {
    name: "Santa Fe",
    bounds: { minLat: -34.0, maxLat: -28.0, minLng: -62.5, maxLng: -59.0 }
  },
];

export const detectProvince = (lat: number, lng: number): string => {
  for (const province of argentineProvinces) {
    if (
      lat >= province.bounds.minLat &&
      lat <= province.bounds.maxLat &&
      lng >= province.bounds.minLng &&
      lng <= province.bounds.maxLng
    ) {
      return province.name;
    }
  }
  return "Argentina"; 
  
};
