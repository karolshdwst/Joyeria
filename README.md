# Setora - Sitio Web

Sitio web de joyería de lujo creado con HTML, CSS y JavaScript vanilla.

## 📁 Estructura del Proyecto

```
Joyeria/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── app.js          # Funcionalidad JavaScript
└── README.md           # Documentación
```

## 🚀 Características

- **Diseño Responsive**: Adaptable a dispositivos móviles, tablets y escritorio
- **Navegación SPA**: Experiencia de aplicación de página única sin recargas
- **Tres Secciones Principales**:
  - **Sobre Nosotros**: Hero section, video promocional y narrativa de la marca
  - **Productos**: Catálogo con filtros por categoría (Anillos, Collares, Pendientes)
  - **Contacto**: Formulario de contacto e información de la empresa
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Paleta de Colores Premium**: 
  - Dorado: `#D4AF37`
  - Texto: `#333333`
  - Fondo: `#F9F7F2`

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con CSS Grid y Flexbox
- **JavaScript ES6+**: Funcionalidad interactiva
- **Google Fonts**: 
  - Playfair Display (títulos)
  - Inter (texto)

## 📦 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd Joyeria
   ```

2. **Abrir el sitio**:
   - Opción 1: Abrir `index.html` directamente en un navegador
   - Opción 2: Usar un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (si tienes http-server instalado)
     npx http-server
     ```
   - Opción 3: Usar la extensión "Live Server" en VS Code

3. **Acceder al sitio**:
   - Directo: `file:///ruta/a/index.html`
   - Con servidor: `http://localhost:8000`

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-primary: #D4AF37;          /* Color principal (dorado) */
    --color-primary-dark: #C49F2F;     /* Dorado oscuro */
    --color-text: #333333;             /* Color del texto */
    --color-background: #F9F7F2;       /* Color de fondo */
}
```

### Agregar Productos

Edita el array `products` en `js/app.js`:

```javascript
const products = [
    {
        id: 7,
        name: 'Nombre del Producto',
        price: '$1,000',
        category: 'rings', // 'rings', 'necklaces', 'earrings'
        image: 'url-de-la-imagen'
    },
    // ... más productos
];
```

### Modificar Texto

- **Títulos y contenido**: Edita directamente en `index.html`
- **Información de contacto**: Busca la sección `contact-info-section` en `index.html`

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints en:
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## ✨ Funcionalidades Implementadas

### Navegación
- Sistema de tabs para cambiar entre secciones
- Scroll suave al cambiar de página
- Navegación activa destacada

### Productos
- Filtrado por categorías
- Hover effects en tarjetas de productos
- Grid responsive
- Animaciones al aparecer

### Formulario de Contacto
- Validación HTML5
- Manejo de envío (console.log por ahora)
- Limpieza automática después del envío

### Extras
- Botón de música (UI preparada)
- Lazy loading de imágenes
- Manejo de errores de imágenes
- Animaciones al hacer scroll

## 🔧 Mejoras Futuras

- [ ] Integrar API de envío de formularios
- [ ] Agregar modal para detalles de productos
- [ ] Implementar carrito de compras
- [ ] Agregar galería de imágenes
- [ ] Sistema de búsqueda de productos
- [ ] Integración con backend
- [ ] Modo oscuro
- [ ] Multiidioma

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o sugerencias, por favor contacta a través del formulario en el sitio web.

---

Desarrollado con ❤️ para Setora
ugu
