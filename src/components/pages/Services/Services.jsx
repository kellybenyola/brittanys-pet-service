import React, {useEffect } from "react";
import Body from "../../layout/Body/Body";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import ContentDiv from "../../ui/ContentDiv/ContentDiv";
import Slider from "../../ui/Slider/Slider";
import { serviceImg } from "../../../content/ServicesContent";
import { Link } from "react-router-dom";
import CallDiv from "../../ui/CallDiv/CallDiv";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  const { img1, img2, img3, img4, alt } = serviceImg;
  const topLoad = () => {
    window.scrollTo(0, 0);
  };


  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);
  return (
    <Body>
    <SectionTitle title="Services @ Brittany's" />
      <ContentDiv>
      <section>
            <img
              src={img1}
              alt={alt}
            />
          </section>
          <section>
            <h1>Dog Walking</h1>
            <span>Someone needs to make sure your dog gets in their steps throughout the day. I offer a variety of time slots to get those little legs moving.</span>
            <span>25-60 minute dog walks $30-$50 </span>
          </section>
      </ContentDiv>
      <ContentDiv>
      <section data-aos='fade-up'>
            <img
              src={img3}
              alt={alt}
            />
          </section>
          <section data-aos='fade-up'>
            <h1>Pet Sitting</h1>
            <span>Some of our pets are homebodies, and that's okay! 
            I provide 1:1 pet care from the comfort of your home. In-house care is less stressful 
            compared to daycare services outside the home with a 1:15 human-to-animal 
            ratio. 
            I'm here to hang out with your pet in a safe and comfortable environment while you're away. </span>
            <span>Dog Sitting Overnights $90</span>
            <span>Cat Sitting Overnights $50</span>
          </section>
      </ContentDiv>
      <ContentDiv>
      <section data-aos='fade-up'>
            <img
              src={img2}
              alt={alt}
            />
          </section>
          <section data-aos='fade-up'>
            <h1>Pet Wedding Attendant</h1>
            <span>Your pet is apart of the family too, and there's no reason they shouldn't 
               be included in your wedding. I'm there from start to finish to make sure your furbaby
               is a part of your special day without getting into trouble (or the cake)!</span>
            <span>Starting at $200</span>
          </section>
      </ContentDiv>
      <ContentDiv>
      <section data-aos='fade-up'>
            <img
              src={img4}
              alt={alt}
            />
          </section>
          <section data-aos='fade-up'>
            <h1>Other Services</h1>
            <span>Consultations - FREE</span>
            <span>Drop By's - $30</span>
            <span>Adventures - $60</span>
            <span>I offer a variety of specialized services. If you don't see a description that 
             accurately describes your situation email me! I work with all types of animals, and 
             I'd love to hear more about how I can help you and your pet!</span>
            <Link onClick={topLoad} to='/contact'>
              <span>Send a Message</span>
            </Link>
           </section>
      </ContentDiv>
      <CallDiv />
      <SectionTitle title="Customer Barks" />
      <Slider />
    </Body>

  );
}

export default Services;
