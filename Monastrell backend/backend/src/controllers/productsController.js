const products = [
  {
    id: 1,
    name: "Pastel de Chocolate",
    description: "Delicioso pastel de chocolate con relleno de crema",
    price: "$25.00",
    image: "https://www.azucardominomex.com/sites/azucardominomex_com/files/styles/m/public/2022-09/600x336_PASTEL-DE-CHOCOLATE-BRUCE.jpg.webp?itok=1xSHaWTo",
    extraDetails: "Este pastel de chocolate está hecho con ingredientes de alta calidad, con una capa suave y esponjosa de pastel de chocolate y un relleno de crema suave que hará que tu paladar se derrita. Ideal para celebraciones y eventos especiales."
  },
  {
    id: 2,
    name: "Cupcakes de Fresa",
    description: "Cupcakes suaves y esponjosos con glaseado de fresa",
    price: "$15.00",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9YCRMh_Uu2CwT7u7n3cMKEJ7-zqFeRlFgAQ1JiyoImO4Hlx6tLZhzmcaPOmQBOYFQ51W3PumQptTZOc7jSI5rqkVWKal-B8giKfg0veO1qEgGbpabXcFpI_Oa22qzZdfDto8XSPsd2xXm/s1600/IMG_2444.jpg",
    extraDetails: "Estos cupcakes están hechos con un glaseado de fresa cremoso y una base de pastel ligero y esponjoso. Perfectos para un té de la tarde o como un dulce detalle en cualquier evento."
  },
  {
    id: 3,
    name: "Galletas de Avena",
    description: "Galletas de avena con chispas de chocolate",
    price: "$10.00",
    image: "https://osojimix.com/wp-content/uploads/2021/11/Galletas-de-avena-con-chocolate-Pa%CC%81gina.jpg",
    extraDetails: "Estas galletas combinan la suavidad de la avena con la dulzura de las chispas de chocolate. Son ideales para un snack saludable y delicioso, con una textura crujiente por fuera y suave por dentro."
  },
  {
    id: 4,
    name: "Tarta de Limón",
    description: "Tarta de limón fresca y deliciosa con base crujiente",
    price: "$20.00",
    image: "https://imag.bonviveur.com/tarta-de-limon-sin-horno.jpg",
    extraDetails: "La tarta de limón es un postre refrescante con un equilibrio perfecto entre lo ácido y lo dulce. Con una base crujiente y una capa cremosa de limón, es ideal para los amantes de los sabores cítricos."
  },
  {
    id: 5,
    name: "Brownies de Nutella",
    description: "Brownies suaves y cremosos con Nutella",
    price: "$12.00",
    image: "https://thecookiedoughdiaries.com/wp-content/uploads/2022/10/nutella-brownies-featured.jpg",
    extraDetails: "Estos brownies están rellenos de Nutella, lo que les da una textura húmeda y cremosa. Perfectos para los amantes del chocolate y la crema de avellanas, ofrecen una explosión de sabor en cada bocado."
  },
  {
    id: 6,
    name: "Pan de Plátano",
    description: "Pan de plátano casero, suave y esponjoso",
    price: "$8.00",
    image: "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/29512d5f9e4f0cb6792526c66e48eacb.jpg",
    extraDetails: "Este pan de plátano está hecho con plátanos maduros y esponjosos, lo que lo hace ideal para acompañar una taza de café. Su textura suave y su sabor natural lo convierten en un postre perfecto para cualquier ocasión."
  }
];

exports.getAllProducts = (req, res) => {
  res.json(products);
};

