
import React from "react";

const LocationMap = () => {
  return (
    <div className="mt-20 w-full h-96 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.3553280869354!2d28.17900867635555!3d-25.73181057831982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955e0d2fd7c3e3%3A0x53b521f756de8169!2s599%20Franzina%20St%2C%20Eloffsdal%2C%20Pretoria%2C%200084%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1718557823762!5m2!1sen!2sus"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="KMD PRO BARBER location"
      ></iframe>

      <div className="absolute top-10 left-10 max-w-xs bg-white p-6 rounded-xl shadow-xl md:block hidden">
        <h4 className="font-bold text-xl mb-2">Visit Our Shop</h4>
        <p className="text-muted-foreground mb-4">Experience the premium barbering service you deserve at our stylish location.</p>
        <a 
          href="#booking" 
          className="btn-primary inline-block text-sm"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default LocationMap;
