import ratingImage from '../images/travel.png'; // Ajusta la ruta según la ubicación correcta de la imagen de rating en tu proyecto

const MOCK_RESTAURANTS = [
  {
    id: 1,
    name: "Restaurante 1",
    image: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1680470906/restaurants/restaurant-1_zs1jcj.png",
    rating: ratingImage, // Utiliza la imagen importada
    hours: "8:00 AM - 10:00 PM",
    dish: {
      name: "Plato 1",
      category: "Categoria 1"
    }
  },
  {
    id: 2,
    name: "Restaurante 2",
    image: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1680470906/restaurants/restaurant-1_zs1jcj.png",
    rating: ratingImage, // Utiliza la imagen importada
    hours: "9:00 AM - 11:00 PM",
    dish: {
      name: "Plato 2",
      category: "Categoria 2"
    }
  },
  {
    id: 3,
    name: "Restaurante 3",
    image: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1680470906/restaurants/restaurant-1_zs1jcj.png",
    rating: ratingImage, // Utiliza la imagen importada
    hours: "10:00 AM - 9:00 PM",
    dish: {
      name: "Plato 3",
      category: "Categoria 3"
    }
  },
  {
    id: 4,
    name: "Restaurante 4",
    image: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1680470906/restaurants/restaurant-1_zs1jcj.png",
    rating: ratingImage, // Utiliza la imagen importada
    hours: "11:00 AM - 8:00 PM",
    dish: {
      name: "Plato 4",
      category: "Categoria 4"
    }
  },
  {
    id: 5,
    name: "Restaurante 5",
    image: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1680470906/restaurants/restaurant-1_zs1jcj.png",
    rating: ratingImage, // Utiliza la imagen importada
    hours: "12:00 PM - 7:00 PM",
    dish: {
      name: "Plato 5",
      category: "Categoria 5"
    }
  },
  // Agrega más restaurantes de la misma forma
];

export default MOCK_RESTAURANTS;