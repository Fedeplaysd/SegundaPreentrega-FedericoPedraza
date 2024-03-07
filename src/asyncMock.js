const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celular",
    img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
    stock: 25,
    description: "El iPhone 12 es un teléfono inteligente de gama alta fabricado por Apple, conocido por su diseño elegante, potente rendimiento, cámaras de alta calidad y soporte para la red 5G. También ofrece una integración profunda con el ecosistema de productos de Apple y una amplia gama de aplicaciones y servicios.",
  },
  {
    id: "2",
    name: "samsung s21",
    price: 800,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "El Samsung S21 es un teléfono inteligente de gama alta con una pantalla AMOLED de alta resolución, potente procesador, cámaras de alta calidad y soporte para conectividad 5G. También cuenta con una batería de larga duración y diversas funciones avanzadas de software.",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 0,
    description: "El iPad es una tablet fabricada por Apple que ofrece una pantalla táctil de alta resolución, potente rendimiento, una amplia selección de aplicaciones y servicios a través de la App Store, y una variedad de modelos que van desde el iPad estándar hasta el iPad Pro con capacidades profesionales y soporte para el Apple Pencil.",
  },
  {
    id: "4",
    name: "Notebook 8va generacion",
    price: 1920,
    category: "notebooks",
    img: 	"https://images.fravega.com/f500/1d2ea08cf34e7f9df8fece68e10aabfb.jpg",
    stock: 0,
    description: "La Lenovo G15 es un modelo de laptop de la serie IdeaPad de Lenovo. Ofrece un equilibrio entre rendimiento y precio, con una pantalla de 15 pulgadas, un procesador de última generación, opciones de gráficos dedicados y una variedad de puertos de conectividad. Es adecuada para tareas diarias como navegación web, trabajo de oficina, reproducción de medios y juegos ligeros.",
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
}

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId))
    }, 1000);
  })
}