import Card from "../../ui/Card/Card";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import ContentDiv from "../../ui/ContentDiv/ContentDiv";
import { Link } from "react-router-dom";
import Body from "../../layout/Body/Body";
import React, { useEffect } from "react";
import {
  sectionContent,
  cardSectionContent,
} from "../../../content/AboutContent";
import Aos from "aos";
import "aos/dist/aos.css";

const About = (props) => {
  const {
    sectionTitle: title1,
    contentTitle1,
    contentTitle2,
    img1,
    img2,
    p1,
    p2,
    alt,
  } = sectionContent;
  const {
    sectionTitle: title2,
    cardTitle1,
    cardTitle2,
    cardTitle3,
    cardIcon1,
    cardIcon2,
    cardIcon3,
    cardP1,
    cardP2,
    cardP3,
  } = cardSectionContent;

  const topLoad = () => {
    window.scrollTo(0, 0);
  };

  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className={props.bgColor}>
      <Body>
        <SectionTitle title={title1} />
        <ContentDiv >
            <section>
              <img
                src={img1}
                alt={alt}
              />
            </section>
            <section>
              <h1>{contentTitle1}</h1>
              <span>{p1}</span>
              <div>
              <Link onClick={topLoad} to="/services">
                <span>Learn more about my services</span>
              </Link>
              </div>
            </section>
        </ContentDiv>
        <ContentDiv>
            <section data-aos='fade-up'>
              <h1>{contentTitle2}</h1>
              <span>{p2}</span>
              <div>
                <a href="https://www.timetopet.com/portal/brittanyspetservice/create-account">
                  <span>Book your first session now!</span></a>
              </div>
            </section>
            <section data-aos='fade-up'>
              <img
                src={img2}
                alt={alt}
              />
            </section>
        </ContentDiv>

        <SectionTitle title={title2} />
        <div data-aos='fade-in' className=" card-column">
          <Card
            className="column"
            icon={cardIcon1}
            title={cardTitle1}
            content={cardP1}
          />
          <Card
            className="column "
            icon={cardIcon2}
            title={cardTitle2}
            content={cardP2}
          />
          <Card
            className="column"
            icon={cardIcon3}
            title={cardTitle3}
            content={cardP3}
          />
        </div>
      </Body>
    </div>
  );
};

export default About;
