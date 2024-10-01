import React, { useState } from "react";
import styles from "../styles/MainSection.module.css";
import img1 from "../Assets/1.jpeg";
import img2 from "../Assets/2.jpeg";
import img3 from "../Assets/3.jpeg";
import leftArrow from "../Assets/icon-angle-left.svg";
import rightArrow from "../Assets/icon-angle-right.svg";

// Carrusel de imágenes y textos
const images = [img1, img2, img3];
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


const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Carrusel de imágenes
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Carrusel de textos
  const nextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevText = () => {
    setCurrentTextIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <section className={styles.about_section}>

      {/* Carrusel de imágenes */}
      <div className={styles.about_image}>
        <img src={images[currentImageIndex]} alt="Carrusel" />
        <button className={styles.arrow_left} onClick={prevImage}>
          <img src={leftArrow} alt="Previous" />
        </button>
        <button className={styles.arrow_right} onClick={nextImage}>
          <img src={rightArrow} alt="Next" />
        </button>
      </div>


      {/* Texto con botones para cambiarlo */}
      <div className={styles.about_text}>
        <h3>{texts[currentTextIndex].title}</h3>
        <p>{texts[currentTextIndex].description}</p>

        {/* Botones para cambiar el texto */}
        <div className={styles.text_arrows}>
          <button className={styles.arrow_left_text} onClick={prevText}>
            <img src={leftArrow} alt="Previous text" />
          </button>
          <button className={styles.arrow_right_text} onClick={nextText}>
            <img src={rightArrow} alt="Next text" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
