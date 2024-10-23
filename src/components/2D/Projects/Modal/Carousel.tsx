import styles from "./Carousel.module.css";
import { Project } from "../../../../models/Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";

export default function Carousel({ project }: { project: Project }) {
  const sliderRef = useRef<Slider>(null);
  return (
    <div className={styles.carousel}>
      <div
        className={styles.leftArrow}
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <ArrowBackRounded />
      </div>
      <div
        className={styles.rightArrow}
        onClick={() => sliderRef.current?.slickNext()}
      >
        <ArrowForwardRounded />
      </div>
      <div className={styles.slider}>
        <Slider
          ref={sliderRef}
          dots
          centerMode
          swipeToSlide
          autoplay
          pauseOnHover
          autoplaySpeed={3000}
          arrows={false}
          slidesToShow={3}
          responsive={[{ breakpoint: 500, settings: { slidesToShow: 1 } }]}
        >
          <div className="h-28 px-4 outline-none">
            <img src={"./Images/Projects/" + project.image} />
          </div>
          <div className="h-28 px-4 outline-none">
            <img src={"./Images/Projects/" + project.image} />
          </div>
          <div className="h-28 px-4 outline-none">
            <img src={"./Images/Projects/" + project.image} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
