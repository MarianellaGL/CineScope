import { useQuery } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function buildQuery({ areaId = 3600286393, timeout = 25, extra = "" } = {}) {
  return `
    [out:json][timeout:${timeout}];
    area(id:${areaId})->.searchArea;
    nwr["amenity"="cinema"](area.searchArea);
    ${extra}
    out geom;
  `;
}

async function fetchOverpassRaw(query) {
  let lastError;
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({ data: query }),
    });
    if (!res.ok) {
      lastError = Object.assign(new Error(`HTTP ${res.status}`), {
        status: res.status,
      });
    }
    return await res.json();
  } catch (e) {
    lastError = e;
  }
  throw lastError || new Error("No Overpass endpoints reachable");
}

export async function fetchCinemas(params = {}) {
  const query = buildQuery(params);
  const json = await fetchOverpassRaw(query);
  const elements = Array.isArray(json?.elements) ? json.elements : [];

  const rows = elements
    .filter(
      (el) => el.type === "node" || el.type === "way" || el.type === "relation"
    )
    .map((el) => {
      const lat = el.lat ?? el.center?.lat ?? el.bounds?.minlat;
      const lon = el.lon ?? el.center?.lon ?? el.bounds?.minlon;
      return {
        id: `${el.type}-${el.id}`,
        name: el.tags?.name || "Cine sin nombre",
        city: el.tags?.["addr:city"] || el.tags?.["is_in:city"] || "",
        province: el.tags?.["addr:state"] || "",
        lat,
        lon,
        tags: el.tags || {},
      };
    })
    .filter((r) => Number.isFinite(r.lat) && Number.isFinite(r.lon));

  return rows;
}

export function useCinemas(filters = {}) {
  const { province, q } = filters;

  return useQuery({
    queryKey: ["cinemas", { province, q }],
    queryFn: async () => {
      const all = await fetchCinemas();
      return all.filter((r) => {
        const byProv = province
          ? (r.province || "").toLowerCase().includes(province.toLowerCase())
          : true;
        const byText = q
          ? [r.name, r.city, r.province]
              .join(" ")
              .toLowerCase()
              .includes(q.toLowerCase())
          : true;
        return byProv && byText;
      });
    },
  });
}
