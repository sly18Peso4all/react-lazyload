import React from "react";

const ContactForm = () => (
  <div className="container">
    <form id="contact" className="contact-card">
      <div className="disclaimer">
        <h3>Reservations</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pharetra hendrerit placerat.
        </p>
      </div>
      <ul>
        <li>
          <input type="text" placeholder="First Name" name="first" />
        </li>
        <li>
          <input type="text" placeholder="Last Name" name="last" />
        </li>
        <li>
          <input type="tel" placeholder="Phone" name="phone" />
        </li>
        <li className="comment">
          <textarea id="info" placeholder="Tell us about your trip" />
        </li>
      </ul>
      <button type="submit">Book Now</button>
    </form>
  </div>
);

export default ContactForm;
