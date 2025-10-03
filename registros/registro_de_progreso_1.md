# Registro de Progreso - Sesión 1

Este documento resume los avances, problemas resueltos y próximos pasos en el desarrollo de la app NutriGuia.

## 1. Avances Realizados

### Fase 1: Reestructuración Funcional (Completada)
- Se actualizó la lista de padecimientos en el código a la versión definitiva y correcta.
- Se eliminó la sección estática de "Padecimientos Destacados".
- Se implementó una lista completa y con scroll vertical para todos los padecimientos en la pantalla de inicio.
- Se actualizaron los textos del encabezado a un eslogan más dinámico.

### Fase 2: Mejoras Visuales (En Progreso)
- Se reemplazó el fondo de color del encabezado por una imagen de fondo temática.
- Se sustituyó el logo `.png` por su versión `.svg` para eliminar el fondo blanco y mejorar la escalabilidad.
- Se aumentó el tamaño del logo para mayor impacto visual.
- Se implementó un efecto de "resplandor" circular detrás del logo para mejorar el contraste.
- Se reemplazaron las 4 tarjetas de estadísticas por 4 botones de acción circulares con nuevos iconos, preparando el terreno para nuevas funcionalidades.

## 2. Obstáculos Superados

Durante el desarrollo, se diagnosticaron y resolvieron varios problemas técnicos:

- **Conflicto de Red (IP):** Se identificó y solucionó un conflicto de direcciones IP entre el ordenador y el celular, que era la causa raíz de los errores iniciales de conexión (`fetch failed` y `Failed to download remote update`).
- **Configuración de Firewall (UFW):** Se detectó que el firewall de Debian (`ufw`) estaba bloqueando el puerto de Expo (`8081`), y se configuró la regla necesaria para permitir la conexión.
- **Dependencias de Expo SDK:** Tras la actualización del proyecto, se utilizó `npx expo doctor` para diagnosticar y reparar una dependencia nativa faltante (`react-native-worklets`).
- **Renderizado de SVG:** Se habilitó el soporte para importar archivos SVG como componentes de React mediante la instalación de `react-native-svg-transformer` y la creación de un archivo `metro.config.js` personalizado.
- **Bugs Post-Refactor:** Se corrigieron errores introducidos durante la refactorización, como una importación de `LinearGradient` faltante, un logo que no se mostraba y textos superpuestos.

## 3. Próximos Pasos

- **Finalizar Fase 2 (Fuentes):**
  - [ ] Investigar e implementar una fuente personalizada para unificar la tipografía del encabezado.

- **Implementar Nuevas Funciones:**
  - [ ] Dar funcionalidad a los nuevos botones de acción: "Temporizador", "Rutina" y "Ejercitación".
  - [ ] Implementar la función del botón "Gracias" para permitir al usuario compartir su testimonio en redes sociales.

- **Iniciar Fase 3 (Modo Oscuro/Claro):**
  - [ ] Implementar un selector de tema (sol/luna) en el encabezado.
  - [ ] Crear un sistema de theming para gestionar los colores de la app de forma dinámica.
