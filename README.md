# 🚛 Traxión - Sistema de Mantenimiento Preventivo

**Proyecto desarrollado para el Hackathon Bécalos Traxión Tech Challenge 2025**

## 🎯 Resumen del Proyecto

Prototipo funcional de interfaz web que permite a los operadores de camiones de Traxión realizar inspecciones preventivas antes de salir a ruta, mediante un **Reporte 360°**, y consultar en tiempo real con un asistente de inteligencia artificial (**Ingeniero Trax-Bot**) cuando detectan problemas mecánicos. El sistema prioriza la seguridad, traduciendo reportes coloquiales en diagnósticos técnicos estructurados.

## 🚀 Funcionalidades Clave
* **Reporte de Salida 360°**: Formulario pre-ruta para capturar datos de la unidad (ID, placas, kilometraje) y validar el estado de la unidad (frenos, neumáticos, niveles y luces).
* **Validación Crítica en Tiempo Real**: El sistema de Salida 360º analiza automáticamente campos críticos (por medio de Javascript) como niveles de aceite, presión de llantas y estado de frenos, disparando alertas visuales si se detecta un riesgo operativo.
* **Ingeniero Trax-Bot (Ingeniero Virtual)**: Asistente conversacional 24/7 diseñado para diagnosticar fallas y clasificar niveles de riesgo mediante un sistema de semáforo.
   * **Acceso al Agente**: [Prototipo de Agente en Gemini](https://gemini.google.com/gem/115WEyqpqOrh2KN9oHlKzs-TX7tjEcw9Y?usp=sharing)
* **Interfaz Adaptable**: Diseño 100% responsivo para uso en dispositivos móviles.
* **Gestión de Privacidad**: Incluye un sistema de gestión de cookies.

## 🛠️ Stack Tecnológico

* **Frontend**: HTML5 semántico, CSS3 con variables dinámicas y JavaScript Vanilla.
* **Recursos**: Iconografía de Font Awesome 6.0 y branding institucional de Traxión.

## 📂 Estructura del Repositorio

* `index.html`: Estructura principal y componentes del chatbot.
* `styles.css`: Sistema de diseño basado en variables (Lime/Dark) y layouts flexibles.
* `script.js`: Manejo de eventos, validaciones de seguridad y lógica del asistente.
* `LICENSE`: Proyecto bajo Licencia MIT.

## ⚙️ Instalación y Uso

1. **Clonar el repositorio**: `git clone https://github.com/ange07/traxion-mantenimiento-ai.git`
2. **Ejecución**: Abrir `index.html` en cualquier navegador moderno (no requiere configuración de servidor).
3. **Flujo de Usuario**: Completar el reporte de salida; si se detectan anomalías, consultar con Ingeniero Trax-Bot para generar un informe estructurado.

## 👥 Equipo de Desarrollo

* Angélica Chin
* Javier Martínez
* Alfredo Gutiérrez