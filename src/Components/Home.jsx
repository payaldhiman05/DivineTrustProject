import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

import img1 from "../assets/3image.jpg";
import img2 from "../assets/frontpage.jpg";
import img3 from "../assets/secondimage.jpg";
import img4 from "../assets/1image.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    arrows: true,
  };

  return (
    <div className="home-container">

      <div className="slideshow-container">
        <Slider {...settings}>
          <div className="slide">
            <img src={img1} alt="Chintpurni Temple" />
          </div>
          <div className="slide">
            <img src={img2} alt="Temple View" />
          </div>
          <div className="slide">
            <img src={img3} alt="Aarti Ceremony" />
          </div>
          <div className="slide">
            <img src={img4} alt="Divine Landscape" />
          </div>
        </Slider>
        <div className="overlay">
          <h1>Welcome to Chintpurni Temple</h1>
          <p>Experience Divine Blessings & Spiritual Serenity</p>
        </div>
      </div>
      <section className="home-content">
        <div className="about-temple">
          <h2>Discover Chintpurni Temple</h2>
          <p>
            Nestled in the serene hills of <strong>Himachal Pradesh</strong>, the <strong>Chintpurni Temple</strong> is one of the most revered Shakti Peethas in India.
            Devotees visit this sacred shrine to seek blessings from Goddess Chintpurni (Chhinnamasta Devi), believed to remove all worries and fulfill wishes.
          </p>
        </div>

        <div className="temple-features">
          <h2>Why Visit Chintpurni Temple?</h2>
          <ul>
            <li> Surrounded by lush green hills, offering peace & spirituality.</li>
            <li> One of the 51 Shakti Peethas, rich in history & devotion.</li>
            <li> Experience grand aartis, festivals & spiritual bliss.</li>
            <li> A place where faith turns into divine energy.</li>
          </ul>
        </div>

        <div className="trust-section">
          <h2>About Divine Himachal Trust</h2>
          <p>
            The <strong>Divine Himachal Trust</strong> is a dedicated non-profit organization working towards the <strong>preservation of Himachal’s spiritual and cultural heritage</strong>.
            Through <strong>charity, temple restoration, and community services</strong>, we aim to spread positivity and provide support to those in need.
          </p>
        </div>

        <div className="visit-info">
          <h2>Plan Your Visit</h2>
          <p>
            Witness the divine energy and immerse yourself in the peaceful surroundings of <strong>Chintpurni Temple</strong>.
            Join hands with us at <strong>Divine Himachal Trust</strong> and contribute towards a <strong>spiritual and social cause</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
