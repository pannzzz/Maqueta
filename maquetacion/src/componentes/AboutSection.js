import React, { useState } from "react";
import styles from "../styles/AboutSection.module.css";
import img2 from "../Assets/2.jpeg";
import img3 from "../Assets/3.jpeg";
import leftArrow from "../Assets/icon-angle-left.svg";
import rightArrow from "../Assets/icon-angle-right.svg";

// Textos
const texts = [
  {
    title: "Mejora tu espacio con soluciones creativas",
    description:
      "Ofrecemos calidad inigualable, confort y estilo para propietarios de todo el país. Nuestros expertos combinan forma y función para dar vida a tu visión. Crea un espacio único con nuestra colección y haz que tu hogar refleje tu personalidad y gustos.",
  },
  {
    title: "Estamos disponibles en todo el mundo",
    description:
      "Con tiendas en diferentes partes del mundo, es fácil para ti encontrar los muebles perfectos para tu hogar o negocio. Localmente, estamos en las principales ciudades del país. Encuentra la sucursal más cercana con nuestro localizador de tiendas. ¿Tienes alguna duda? Contáctanos hoy mismo.",
  },
  {
    title: "Fabricados con los mejores materiales",
    description:
      "Nuestros muebles modernos garantizan un nivel de calidad excepcional. Nuestra empresa ha invertido en tecnología avanzada para asegurarse de que cada producto sea lo más perfecto y consistente posible. Con tres décadas de experiencia, entendemos lo que nuestros clientes buscan para sus hogares y oficinas.",
  },
];


// Componente de imagen izquierda
const LeftImage = () => {
  return (
    <div className={styles.image_container}>
      <img src={img3} alt="Imagen izquierda" className={styles.image} />
    </div>
  );
};

// Componente de imagen derecha
const RightImage = () => {
  return (
    <div className={styles.image_container}>
      <img src={img2} alt="Imagen derecha" className={styles.image} />
    </div>
  );
};

// Componente de texto con botones para cambiar el contenido
const TextContent = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const nextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevText = () => {
    setCurrentTextIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <div className={styles.about_text}>
      <h3>{texts[currentTextIndex].title}</h3>
      <p>{texts[currentTextIndex].description}</p>
      <div className={styles.text_arrows}>
        <button className={styles.arrow_left_text} onClick={prevText}>
          <img src={leftArrow} alt="Previous text" />
        </button>
        <button className={styles.arrow_right_text} onClick={nextText}>
          <img src={rightArrow} alt="Next text" />
        </button>
      </div>
    </div>
  );
};

// Componente principal que junta todo
const AboutSection = () => {
  return (
    <section className={styles.about_section}>
      <LeftImage />
      <TextContent />
      <RightImage />
    </section>
  );
};

export default AboutSection;
