
import React from "react";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";
import LocationMap from "./contact/LocationMap";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or need to schedule an appointment? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
      
      <LocationMap />
    </section>
  );
};

export default Contact;
