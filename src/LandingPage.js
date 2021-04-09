import React, { lazy, Suspense, useRef } from "react";
import "./styles.css";
import useIntersectionObserver from "./useIntersectionObserver";
import background from "./assets/background.jpeg";

const CardSection = lazy(() => import("./CardSection"));
const ContactForm = lazy(() => import("./ContactForm"));

const LandingPage = () => {
  const cardsSection = useRef(null);
  const contactSection = useRef(null);
  const isCardSectionVisible = useIntersectionObserver(cardsSection);
  const isContactSectionVisible = useIntersectionObserver(contactSection);

  return (
    <div className="outer">
      <section
        className="intro"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <h1>Mountain Getaway</h1>
          <div className="copy">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque pharetra hendrerit placerat. Phasellus scelerisque in
              odio vitae suscipit. Nullam consectetur dapibus libero, non
              consectetur velit aliquam at. Nam vestibulum hendrerit eros at
              tempor. Phasellus eget magna rutrum orci tristique malesuada et in
              erat. Duis vitae facilisis metus, at hendrerit nunc.
            </p>
          </div>
        </div>
      </section>
      <section className="cards" ref={cardsSection}>
        {isCardSectionVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <CardSection />
          </Suspense>
        )}
      </section>
      <section className="contact" ref={contactSection}>
        {isContactSectionVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <ContactForm />
          </Suspense>
        )}
      </section>
    </div>
  );
};

export default LandingPage;
