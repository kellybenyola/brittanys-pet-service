import ContactForm from "../../ui/ContactForm/ContactForm";
import Body from "../../layout/Body/Body";
import React from "react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import ContentDiv from "../../ui/ContentDiv/ContentDiv";
import { FaFacebook, FaInstagram, FaEnvelope,} from "react-icons/fa";
import {contactImg} from "../../../content/ContactContent";
import CTA from "../../ui/CTA/CTA";


const Contact = () => {
  const {img1, alt} = contactImg;
  return (
    <Body>
      <SectionTitle title="Got Questions?" />
   
      <ContentDiv>
      <section>
      <h1>Connect with me.</h1>
      <span>
        Follow me on social media to see my daily adventures and schedule changes.
        Send a message for any specific inquires!
      </span>
     
      <div>
        <a href="https://www.facebook.com/Brittanys-Pet-Service-LLC-101359095663172">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/brittanys_pet_service_llc/">
                <FaInstagram />
              </a>
              <a href="mailto:brittanyspetservicellc@gmail.com">
                <FaEnvelope />
              </a>
          </div>
         <section>
        <img src={img1} alt={alt}/>
      </section>
      </section>
      <section>
      <ContactForm title="Drop a line!" />
      </section>
      </ContentDiv>
      <CTA />
    </Body>
  );
};

export default Contact;
