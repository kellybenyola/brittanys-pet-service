import React, { Fragment, useEffect } from "react";
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
    <Fragment>
      <Body className=" text-darkGreen">
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
              <span>Stop by, pick up, drop off, here to make sure your dog gets in his steps.</span>
              <span> $500 | $25/hr | $100/day </span>
            </section>
        </ContentDiv>

        <ContentDiv>
        <section data-aos='fade-right'>
              <img
                src={img3}
                alt={alt}
              />
            </section>
            <section data-aos='fade-right'>
              <h1>Pet Sitting</h1>
              <span>Some of our pets are just homebodies, and that's okay! I'm here
              to hang out and make sure your pet is safe in their environment.</span>
              <span> $500 | $25/hr | $100/day </span>
            </section>
        </ContentDiv>

        <ContentDiv>
        <section data-aos='fade-left'>
              <img
                src={img2}
                alt={alt}
              />
            </section>
            <section data-aos='fade-left'>
              <h1>Wedding Guest</h1>
              <span>Your pet is apart of the family too, and there's no reason they shouldn't 
              be included in your wedding. I'm there from start to finish to make sure your furbaby
              is a part of your special day without getting into to drop (or the cake)!</span>
              <span> $500 | $25/hr | $100/day </span>
            </section>
        </ContentDiv>

        <ContentDiv>
        <section data-aos='fade-up'>
        <h1>The Sky is the Limit!</h1>
          <span>
            I offer a variety of specialized services, so if you don't see a description that 
            accurately describes your situation email me! I work with all types of animals, and 
            I'd love to hear more about how I can help you and your pet! 
          </span>
          <Link onClick={topLoad} to='/contact'>
            <span>Send a Message</span>
          </Link>
        </section>
        <section data-aos='fade-up'>
              <img
                src={img4}
                alt={alt}
              />
            </section>
        </ContentDiv>
        <CallDiv />
        <SectionTitle title="Customer Barks" />
        <Slider />
      </Body>
    </Fragment>
  );
}

export default Services;
