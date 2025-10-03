# Documentación del Proyecto: NutriGuia

## 1. Descripción General

NutriGuia es una aplicación móvil desarrollada con Expo (React Native) que tiene como objetivo proporcionar guías nutricionales para ayudar a los usuarios a gestionar diversas condiciones de salud y padecimientos a través de una alimentación adecuada.

## 2. Padecimientos Cubiertos (Versión Actual)

La aplicación actualmente incluye información para los siguientes padecimientos:

*   Control de Peso
*   Diabetes Tipo 2
*   Hipertensión Arterial
*   Colesterol Elevado
*   Síndrome de Intestino Irritable
*   Celiaquía
*   Anemia
*   Osteoporosis
*   Ácido Úrico Elevado
*   Enfermedad Renal Crónica

## 3. Estructura de la Aplicación

El proyecto utiliza **Expo Router** para la navegación, con una estructura basada en archivos dentro de la carpeta `app/`:

*   `app/_layout.tsx`: Es el layout raíz que envuelve toda la aplicación.
*   `app/(tabs)/`: Define la navegación principal por pestañas.
    *   `_layout.tsx`: Configura el navegador de pestañas (Tab Navigator).
    *   `index.tsx`: Pantalla de Inicio.
    *   `conditions.tsx`: Pantalla para listar todas las condiciones (funcionalidad futura).
    *   `premium.tsx`: Pantalla para contenido de pago.
    *   `profile.tsx`: Pantalla para el perfil del usuario.
*   `app/condition/[id].tsx`: Es una ruta dinámica que muestra la pantalla de detalle para un padecimiento específico.

## 4. Registro de Cambios y Tareas Realizadas

1.  **Actualización del Proyecto:** Se actualizó el proyecto de una versión anterior a la **SDK 51** de Expo, resolviendo dependencias y problemas de compatibilidad.
2.  **Refactorización de la Pantalla de Inicio (Fase 1):**
    *   Se eliminó la sección de "Padecimientos Destacados" que mostraba solo 3 elementos.
    *   Se reemplazó por una lista completa y desplazable (ScrollView) que muestra todos los padecimientos disponibles.
    *   Se eliminó el botón "Ver Todos los Padecimientos".
    *   Se actualizaron los textos del encabezado, eliminando "Tu Guía Nutricional" y añadiendo el eslogan "Tu camino a una vida más sana".

## 5. Tareas Pendientes (Roadmap)

### Fase 2: Mejoras Visuales (En progreso)

*   [ ] **Aplicar imagen de fondo:** Reemplazar el fondo verde del encabezado por una imagen de alimentos saludables.
*   [ ] **Mejorar el logo:**
    *   [ ] Utilizar el archivo SVG (`logo1.svg`) en lugar del PNG para evitar el fondo blanco y mejorar la calidad.
    *   [ ] Aumentar el tamaño del logo para mayor visibilidad.
*   [ ] **Unificar tipografía:** Hacer que el texto del encabezado use la misma fuente que el logo "NutriGuia".

### Fase 3: Funcionalidades Avanzadas

*   [ ] **Selector de Tema:** Implementar un interruptor (sol/luna) en la esquina superior derecha para cambiar entre modo claro y modo oscuro.
