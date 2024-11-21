# Neil Indumentaria

Neil Indumentaria es una aplicación creada en React para la venta de ropa y accesorios, asegurando una experiencia responsive y accesible para todos los usuarios. La app proporciona una interfaz intuitiva para navegar por distintas categorías de productos, acceder a los detalles de cada uno, y gestionar el carrito de compras.

---

## Características principales

### 1. Componente NavBar
Barra de navegación que incluye:
- **CartWidget**: Muestra el número dinámico de ítems agregados al carrito y acceso directo a la vista del carrito.
- **Lista de categorías** (NavCategory): Las opciones incluyen:
  - Partes de Arriba
  - Partes de Abajo
  - Zapatillas
- **NavLogo**: Con el logo de la tienda.
- **NavToggler**: Botón responsive que despliega las categorías en dispositivos móviles.

---

### 2. Componente ItemListContainer
Componente que puede mostrar:
- **Vista principal (Home)**: Contiene el listado general de productos.
- **Categorías**: Navegación por las categorías:
  - Partes de Arriba
  - Partes de Abajo
  - Zapatillas

---

### 3. Componente Item
Muestra una descripción breve de cada producto, incluyendo:
- Nombre del producto
- Precio
- Botón para ver detalles del producto

---

### 4. Componente ItemDetailContainer
Vista de detalle para cada producto seleccionado:
- Incluye una descripción ampliada, imágenes y precios.
- **Funcionalidad adicional**:
  - **Componente SelectAddContainer**: Engloba el contador para definir la cantidad de ítems (limitada por el stock) y el botón de agregar al carrito.

---

### 5. Componente Checkout
Vista del carrito de compras, organizada en tres secciones:
- **Resumen de productos (CartItem)**: Lista de cada ítem con su cantidad y un contador interactivo para agregar o quitar ítems.
- **CartTotalPrice**: Calcula automáticamente el precio total en función de la cantidad de productos.
- **CartForm**: Formulario para completar los datos de compra (nombre, teléfono y email). Al enviar el formulario, se genera un ID de orden único mediante Firestore.

---

### 6. Indicador de carga
- **FourSquare**: Indicador gráfico de carga implementado con la librería `react-loading-indicators` para mejorar la experiencia de usuario mientras se cargan componentes pesados.

---

## Configuración de rutas con React Router DOM

La aplicación utiliza React Router DOM, configurado en el componente `App` con `BrowserRouter`, abarcando toda la aplicación y definiendo las siguientes rutas:

- **Ruta por defecto (`/`)**: Apunta a `ItemListContainer` para mostrar la vista principal.
- **Ruta dinámica (`/category/:id`)**: Apunta a `ItemListContainer`, renderizando la categoría correspondiente según el `id`.
- **Ruta dinámica de detalles (`/item/:id`)**: Apunta a `ItemDetailContainer` para mostrar los detalles del producto seleccionado.
- **Ruta `/cart`**: Apunta al componente `Checkout` para acceder al carrito.

---

## Integración de React Hooks

- **`useState`**: Almacena información dinámica que se renderiza en pantalla y activa la carga de ciertos componentes mediante renderizado condicional.
- **`useEffect`**: Permite cargar datos desde Firestore en el momento del montaje del componente o ejecutar funciones específicas cuando cambian ciertas variables de estado.
- **`useContext`**: Proporciona estado, información del carrito y funciones para modificarlo a los componentes especificados.
- **`useParams`**: Utilizado para obtener los `id` dinámicos de categorías y productos en componentes determinados.

---

## Custom Hooks

Neil Indumentaria utiliza dos custom hooks para funcionalidades específicas:

1. **`useCount`**: Implementa la funcionalidad del contador interactivo para manejar las cantidades de productos.
2. **`useLoad`**: Maneja el indicador de carga `FourSquare` de la librería `react-loading-indicators`.

---

## Datos y almacenamiento

Los datos de los productos se almacenan en Firestore (Firebase) y son utilizados para cargar las vistas de productos en la tienda. Además, las órdenes de compra son almacenadas en una colección separada de Firestore para garantizar un seguimiento de las ventas.

---

## Librerías adicionales

- **Bootstrap**: Para componentes visuales básicos como `Navbar`, `Card`, `Buttons`, `Form control`, etc.
- **SweetAlert**: Utilizado para mostrar alertas interactivas y mensajes de confirmación en la app.
- **FourSquare (`react-loading-indicators`)**: Indicador de carga visual para componentes pesados, implementado con renderizado condicional.

---

## Preprocesadores

- **SASS**: Utilizado para personalizar los estilos de Bootstrap y optimizar la presentación visual de la aplicación.

---

## Hosting

La aplicación está alojada en **Netlify**, con Continuous Deployment activado para actualizar automáticamente los cambios del repositorio de GitHub.

---

## Licencia

Este proyecto está bajo la Licencia **MIT**.

---

## Contacto

Para consultas, puedes escribir a: **gasare5555@gmail.com**

---

## Agradecimientos

Agradecemos el uso de herramientas de código abierto como **React**, **Firebase** y **Bootstrap**, que permiten que **Neil Indumentaria** sea una plataforma funcional y escalable.
