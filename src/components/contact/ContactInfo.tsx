
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

type ContactInfoItem = {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
  linkText: string;
};

type ContactInfoCardProps = {
  item: ContactInfoItem;
};

const ContactInfoCard = ({ item }: ContactInfoCardProps) => {
  return (
    <div className="flex gap-4 hover-up p-4 rounded-lg glass-card">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-barber-gold/10 flex items-center justify-center">
        {item.icon}
      </div>
      <div>
        <h4 className="font-medium text-lg mb-1">{item.title}</h4>
        <p className="text-muted-foreground mb-2">{item.details}</p>
        <a 
          href={item.link} 
          className="text-sm text-barber-gold hover:text-barber-gold/80 flex items-center gap-1"
        >
          {item.linkText}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  const contactInfoItems: ContactInfoItem[] = [
    {
      icon: <MapPin className="h-5 w-5 text-barber-gold" />,
      title: "Our Location",
      details: "599 Catherina St, Eloffsdal, Pretoria, 0084, South Africa",
      link: "https://maps.app.goo.gl/tjdKC8eyj3e35cJE7",
      linkText: "View on Map"
    },
    {
      icon: <Phone className="h-5 w-5 text-barber-gold" />,
      title: "Phone Number",
      details: "+27 78 824 6963",
      link: "tel:+27788246963",
      linkText: "Call Us"
    },
    {
      icon: <Mail className="h-5 w-5 text-barber-gold" />,
      title: "Email Address",
      details: "kdmprobarber@outlook.com",
      link: "mailto:kdmprobarber@outlook.com",
      linkText: "Send Email"
    },
    {
      icon: <Clock className="h-5 w-5 text-barber-gold" />,
      title: "Working Hours",
      details: "Tuesday-Friday: 7AM-6PM, Sat-Sun: 9AM-2PM",
      link: "#booking",
      linkText: "Book Now"
    }
  ];

  return (
    <div className="space-y-8">
      {contactInfoItems.map((item, index) => (
        <ContactInfoCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactInfo;
