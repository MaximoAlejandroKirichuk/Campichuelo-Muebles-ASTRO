export async function fetchProductos() {
    const response = await fetch('/src/components/productos.json');
    const productos = await response.json();
    return { productos };
  }
  