import { useEffect, useRef, useCallback } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { MarkerClusterer, GridAlgorithm } from '@googlemaps/markerclusterer';

export const useMarkerClusterer = () => {
  const map = useMap();
  const clusterer = useRef<MarkerClusterer | null>(null);
  const markers = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    if (!map) return;

    const renderer = {
      render: ({ count, position }: any) => {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" fill="#14b8a6" opacity="0.9" stroke="#0d9488" stroke-width="2"/>
            <text x="30" y="37" text-anchor="middle" font-size="18" font-weight="bold" fill="white">${count}</text>
          </svg>
        `;

        const svgHover = `
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="35" cy="35" r="33" fill="#14b8a6" opacity="0.95" stroke="#0d9488" stroke-width="3" filter="url(#glow)"/>
            <text x="35" y="43" text-anchor="middle" font-size="20" font-weight="bold" fill="white">${count}</text>
          </svg>
        `;

        const marker = new google.maps.Marker({
          position,
          icon: {
            url: `data:image/svg+xml;base64,${btoa(svg)}`,
            scaledSize: new google.maps.Size(60, 60),
          },
          label: undefined,
          zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
        });

        marker.addListener('mouseover', () => {
          marker.setIcon({
            url: `data:image/svg+xml;base64,${btoa(svgHover)}`,
            scaledSize: new google.maps.Size(70, 70),
          });
        });

        marker.addListener('mouseout', () => {
          marker.setIcon({
            url: `data:image/svg+xml;base64,${btoa(svg)}`,
            scaledSize: new google.maps.Size(60, 60),
          });
        });

        return marker;
      },
    };

    clusterer.current = new MarkerClusterer({
      map,
      renderer,
      algorithm: new GridAlgorithm({ maxZoom: 15, gridSize: 80 }),
      onClusterClick: (event, cluster, map) => {
        map.fitBounds(cluster.bounds);
      },
    });

    return () => {
      clusterer.current?.clearMarkers();
      markers.current = [];
    };
  }, [map]);

  const addMarker = useCallback((marker: google.maps.Marker) => {
    if (clusterer.current && marker) {
      markers.current.push(marker);
      clusterer.current.addMarker(marker);
    }
  }, []);

  const removeMarker = useCallback((marker: google.maps.Marker) => {
    if (clusterer.current && marker) {
      markers.current = markers.current.filter((m) => m !== marker);
      clusterer.current.removeMarker(marker);
    }
  }, []);

  const clearMarkers = useCallback(() => {
    if (clusterer.current) {
      clusterer.current.clearMarkers();
      markers.current = [];
    }
  }, []);

  return { clusterer, addMarker, removeMarker, clearMarkers };
};