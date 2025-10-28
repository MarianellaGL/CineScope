# About
CineScope es un proyecto construido con React + TypeScript + Vite, orientado a la exploración de cines en Argentina. La idea central es ofrecer una interfaz moderna que permita visualizar cines tanto en un mapa interactivo como en una tabla de datos, utilizando información real obtenida a través de Overpass API (que consulta datos de OpenStreetMap).

El proyecto está configurado para ser contenedorizado con Docker y servido a través de Nginx, lo cual permite un despliegue limpio y escalable. La base está bien estructurada y modular, con una clara separación entre páginas (landing, mapa y datos).

# Objetivos
- Mostrar los cines disponibles en Argentina en formato de mapa y tabla.
- Practicar integración con APIs públicas (Overpass).
- Implementar arquitectura modular y escalable con React Router y React Query.
- Explorar el despliegue en Docker con Nginx.

# Arquitectura general

Durante la fase inicial se evaluaron varias opciones para el stack. Finalmente, se eligió la siguiente combinación:

- React + TypeScript: permite crear componentes reutilizables con tipado estático, reduciendo errores.
- Vite: facilita un entorno de desarrollo veloz y un build liviano para producción.
- React Router DOM: manejo de rutas SPA (landing, mapa y tabla).
- React Query: administración del estado asincrónico y caché de peticiones.
- Tailwind CSS: para maquetado rápido y consistente, combinando con un estilo visual inspirado en un cielo estrellado.
- Framer Motion: para animaciones suaves y microinteracciones.
- vis.gl o Google Maps API: para renderizar los puntos de los cines sobre un mapa.
- Docker + Nginx: para empaquetar el proyecto y servir el build de forma óptima.

# Diseño y arquitectura

 El proyecto se estructura en tres páginas principales:

 ### Landing: 
 primera vista del sitio, con presentación visual y enlaces de navegación.

### Map:
 visualización geográfica de los cines usando vis.gl o Google Maps.
 
 ### Data:
 tabla responsive que lista los cines, su ciudad, dirección y cantidad de pantallas.

## Arquitectura interna:

- Estructura modular con carpetas separadas para pages, components, lib y hooks.

- Componentes reutilizables para elementos de UI y visualización.

- Hooks personalizados para el manejo de datos de Overpass.

- Configuración de ESLint y TypeScript para mantener consistencia en el código.

# Overpass API
El corazón del proyecto está en el consumo de Overpass API, una interfaz que permite ejecutar consultas sobre la base de datos de OpenStreetMap.
La query utilizada busca todas las entidades con la etiqueta       `amenity=cinema` dentro del área de Argentina.

Ejemplo de consulta:

`[out:json][timeout:25];` \
`area(id:3600286393)->.searchArea;   `\
`nwr["amenity"="cinema"](area.searchArea);`\
`out geom;`

El resultado se obtiene en formato JSON, y luego se procesa para mostrar:

- Nombre del cine.
- Ciudad y dirección.
- Cantidad de pantallas (si la información está disponible).
- Coordenadas para ubicarlo en el mapa.

El fetching se maneja con React Query, lo que permite cachear las peticiones, controlar errores y mostrar estados de carga o retry en caso de fallas.

## Desarrollo paso a paso

- Configuración del entorno: instalación de Vite, TypeScript y ESLint.
- Creación de la landing page: diseño del hero principal con fondo degradado y animaciones.
- Implementación del mapa: integración con vis.gl / Google Maps para mostrar marcadores de los cines.
- Construcción de la tabla de datos: listado de los cines con columnas alineadas y diseño responsive.
- Optimización del fetching: integración de React Query y hooks personalizados para separar la lógica de la UI.
- Testing visual y ajustes de responsividad: verificación en distintos tamaños de pantalla.
- Preparación del entorno de producción: build optimizado con Vite y empaquetado en Docker.

## Despliegue con Docker y Nginx

El proyecto está configurado para ejecutarse dentro de un contenedor Docker. El Dockerfile genera el build de Vite y luego copia los archivos resultantes al servidor Nginx, que sirve el sitio estático.

Pasos principales:
 - Ejecutar npm run build para generar /dist.
 - Construir la imagen con docker build -t cinescope ..
 - Ejecutar con docker run -p 8080:80 cinescope.
 - O usar docker compose up --build para levantar el entorno completo.
 - El archivo nginx.conf incluye el fallback a index.html para manejar correctamente las rutas del SPA.

 
# Instalación y uso

- Instalar dependencias 
 `npm install`

- Correr el entorno de desarrollo
 `npm run dev`


# Uso con Docker
El proyecto incluye Dockerfile y docker-compose.yml para levantar la aplicación fácilmente en contenedor.

`docker build -t cinescope`
`docker run -p 8080:80 cinescope`

O directamente con docker-compose:
`docker compose up --build`

Esto construye la imagen y la sirve con Nginx utilizando el archivo nginx.conf incluido.