import { StaticImageData } from "next/image";

import image1 from "../public/product/image-1.png";
import image2 from "../public/product/image-2.png";
import image3 from "../public/product/image-3.png";
import image4 from "../public/product/image-4.png";
import image5 from "../public/product/image-5.png";
import image6 from "../public/product/image-6.png";
import image7 from "../public/product/image-7.png";
import image8 from "../public/product/image-8.png";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string | StaticImageData;
  rate: {
    rate: number;
    count: number;
  };
  category: string;
};

export const productsFake: Product[] = [
  {
    id: 1,
    title: "Laptop Pro X15",
    description: "Laptop de alto rendimiento ideal para programación y diseño.",
    price: 1299.99,
    image: image1,
    rate: {
      rate: 4.8,
      count: 250,
    },
    category: "Electronics",
  },
  {
    id: 2,
    title: "Auriculares Bluetooth",
    description: "Sonido envolvente con cancelación de ruido.",
    price: 89.99,
    image: image2,
    rate: {
      rate: 4.5,
      count: 180,
    },
    category: "Audio",
  },
  {
    id: 3,
    title: "Smartwatch Active",
    description: "Monitorea tu actividad física y frecuencia cardíaca.",
    price: 199.99,
    image: image3,
    rate: {
      rate: 4.7,
      count: 320,
    },
    category: "Wearables",
  },
  {
    id: 4,
    title: "Teclado Mecánico RGB",
    description: "Teclado gamer con switches mecánicos y retroiluminación RGB.",
    price: 79.99,
    image: image4,
    rate: {
      rate: 4.6,
      count: 145,
    },
    category: "Accessories",
  },
  {
    id: 5,
    title: "Mouse Inalámbrico",
    description: "Diseño ergonómico con batería de larga duración.",
    price: 34.99,
    image: image5,
    rate: {
      rate: 4.4,
      count: 210,
    },
    category: "Accessories",
  },
  {
    id: 6,
    title: "Monitor 27'' 4K",
    description: "Monitor UHD con colores vibrantes y gran definición.",
    price: 349.99,
    image: image6,
    rate: {
      rate: 4.9,
      count: 98,
    },
    category: "Monitors",
  },
  {
    id: 7,
    title: "Silla Gamer",
    description: "Silla ergonómica con soporte lumbar ajustable.",
    price: 249.99,
    image: image7,
    rate: {
      rate: 4.3,
      count: 75,
    },
    category: "Furniture",
  },
  {
    id: 8,
    title: "Tablet Plus 11",
    description: "Pantalla Full HD y batería de larga duración.",
    price: 499.99,
    image: image8,
    rate: {
      rate: 4.7,
      count: 132,
    },
    category: "Tablets",
  },
];
