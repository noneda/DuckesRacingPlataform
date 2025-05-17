const data = [
  {
    url: "/event/intercup-vitrix",
    clave: "intercup-vitrix",
    name: "CAMPEONATO INTERCUP VITRIX",
    img: "/App/Events/IntercupVitrix.webp",
    text: "El Campeonato Intercup Vitrix, es un campeonato de motovelocidad que se realiza en el Autodromo de Tocancipá en la fecha de abril y mayo. Los organizadores principales es la Fundación Interclubes Colombia y Vitrix Original Parts. El campeonato cuenta con dieciocho categorías y la participación es de mas de doscientos pilotos. Los premios son un súper Kit Vitrix, un monotraje personalizado, un descuentos en viajes, Personalización de moto, una tubería RPM, un Trofeo exclusivo y Boletas VIP para la 3ª fecha.",
    location: {
      name: "Autódromo de Tocancipá",
      place: "Tocancipá, Cundinamarca",
      address:
        "Kilómetro 24 Vía Briceño - Zipaquirá, Tocancipá, Cundinamarca, Colombia",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.870693556587!2d-73.947434!3d4.9611559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4071664885bf85%3A0xa454eb285d25984c!2sAut%C3%B3dromo%20de%20Tocancip%C3%A1!5e0!3m2!1ses!2sco!4v1747318923709!5m2!1ses!2sco",
    },
    details: {
      data: "11 de mayo",
      place: "Autódromo de Tocancipá",
      participants:
        "Pilotos novatos y profesionales en categorías de bajo, medio y alto cilindraje",
      organization: "Fundación Interclubes Colombia y Vitrix Original Parts",
    },
    facture: false,
  },
  {
    url: "/event/batalla-de-motores",
    clave: "batalla-de-motores",
    name: "BATALLA DE MOTORES",
    img: "/App/Events/BatallaDeMotores.webp",
    text: "La Fundación Batalla de Motores es una organización colombiana dedicada a promover la seguridad vial y el motociclismo deportivo. A través de la Escudería BDM, organizan eventos de moto velocidad en espacios controlados. Con el objetivo de ofrecer alternativas seguras a los pilotos y fomentar una cultura responsable en las dos ruedas. Para competir, se debe contar con una moto sin placa, protecciones adecuadas y cumplir con los requisitos establecidos por la organización. Las categorías promocionales tienen un costo de 90 mil pesos, mientras que las oficiales son de 120 mil pesos Su evento se raliza en el mes de Febrero, teniendo colaboración con Racing Engine en la Avenida Boyaca #74 - 90 a las 6:00 pm.",
    location: {
      name: "Racing Engine",
      place: "Bogotá",
      address: "AV Boyaca #74 - 90",
      maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.4570622284405!2d-74.0958409!3d4.6903583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b3c38f5f843%3A0xf86be511caedd6df!2zQXYuIEJveWFjw6EgIzc0YTMxLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1747319630968!5m2!1ses!2sco",
    },
    details: {
      data: "15 de Febrero",
      place: "AV Boyaca #74 - 90",
      participants:
        "Pilotos novatos y profesionales en categorías de bajo, medio y alto cilindraje",
      organization: "Batalla De Motores y Racing Engine",
    },
    facture: true,
  },
  {
    url: "/event/rokies-delitire",
    clave: "rokies-delitire",
    name: "CAMPEONATO ROKIE´S DELITIRE",
    img: "/App/Events/CampeonatoRokiesDelitire.webp",
    text: "El Campeonato Rookies Intercup es una competencia de motovelocidad orientada exclusivamente a pilotos novatos, diseñada como una plataforma formativa e inclusiva para aquellos que desean iniciar su trayectoria deportiva en el motociclismo. Con el objetivo de fomentar el desarrollo de nuevos talentos en un entorno seguro y accesible, este campeonato ofrece condiciones especialmente pensadas para principiantes, permitiendo una experiencia real de competencia sin la exigencia de requisitos profesionales. El campeonato se realiza en el mes de marzo en el Autodromo de Tocancipá, siendo apoyado por la marca Dellitire y siendo organizado por la empresa Interclubes Colombia.",
    location: {
      name: "Autódromo de Tocancipá",
      place: "Tocancipá, Cundinamarca",
      address:
        "Kilómetro 24 Vía Briceño - Zipaquirá, Tocancipá, Cundinamarca, Colombia",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.870693556587!2d-73.947434!3d4.9611559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4071664885bf85%3A0xa454eb285d25984c!2sAut%C3%B3dromo%20de%20Tocancip%C3%A1!5e0!3m2!1ses!2sco!4v1747318923709!5m2!1ses!2sco",
    },
    details: {
      data: "16 de mayo",
      place: "Autódromo de Tocancipá",
      participants:
        "Pilotos novatos y profesionales en categorías de bajo, medio y alto cilindraje",
      organization: "Fundación Interclubes Colombia y Delitire",
    },
    facture: false,
  },
];

export default data;

export const ColorsMockUps = ["AZUL", "BLANCO", "NARANJA", "NEGRO"];

export const MockUps = [
  {
    name: "Gorras DUKE´S RACING",
    clave: "GORRA",
    url: "/MockUps/GORRA",
    data: {
      name: "Gorra",
      price: "$29.000",
      desc: "Gorra con un diseño moderno, deportivo y con el logo distintivo DUKE'S RACING.",
    },
  },
  {
    name: "Chaquetas DUKE´S RACING",
    clave: "CHAQUETA",
    url: "/MockUps/CHAQUETA",
    data: {
      name: "Chaqueta",
      price: "$90.000",
      desc: "Chaqueta diseñada para la comodidad, resistencia al viento y para lucir a la hora de rodar o para el día a día.",
    },
  },
  {
    name: "Buzos DUKE´S RACING",
    clave: "BUZO",
    url: "/MockUps/BUZO",
    data: {
      name: "Gorra",
      price: "$79.600",
      desc: "Calidez, suavidad y un diseño urbano inspirado en la adrenalina y velocidad, ideal para usarlo en cualquier momento.",
    },
  },
  {
    name: "Toallas DUKE´S RACING",
    clave: "TOALLA",
    url: "/MockUps/TOALLA",
    data: {
      name: "Toallas",
      price: "$11.200",
      desc: "Toallas en tela absorbente y suave. Luce con el diseño con el logo de DUKES RACING, para entrenamientos y viajes.",
    },
  },
  {
    name: "Pescuezos DUKE´S RACING",
    clave: "PESCUEZO",
    url: "/MockUps/CUELLERO",
    data: {
      name: "Pescuezos",
      price: "$27.000",
      desc: "Fabricado con materiales livianos, transpirables y de secado rápido, ideal para protegerse del viento, el sol y el polvo en carretera.",
    },
  },
];
