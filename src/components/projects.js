import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  DotGroup
} from "pure-react-carousel";

import BookStore from "../images/BookStore.PNG";
import Expanse from "../images/Expanse.PNG";
import SurveySender from "../images/SurveySender.PNG";
import WeatherMap from "../images/WeatherMap.PNG";
import YouTubeSearch from "../images/YouTubeSearch.PNG";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="MainProjects" id="Projects">
        <CarouselProvider
          naturalSlideWidth={850}
          naturalSlideHeight={400}
          totalSlides={5}
        >
          <div className="slider">
            <Slider className="slider">
              <Slide className="projectText" index={0}>
                <p>Hii</p>
                <Image src={BookStore} />
              </Slide>
              <Slide index={1}>
                <Image src={Expanse} />
              </Slide>
              <Slide index={2}>
                <Image src={SurveySender} />
              </Slide>
              <Slide index={3}>
                <Image src={WeatherMap} />
              </Slide>
              <Slide index={4}>
                <Image src={YouTubeSearch} />
              </Slide>
            </Slider>
            <DotGroup className="dots" dotNumbers />
          </div>
        </CarouselProvider>
      </div>
    );
  }
}
export default Projects;
