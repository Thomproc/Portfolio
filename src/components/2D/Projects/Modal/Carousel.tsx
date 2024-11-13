import styles from "./Carousel.module.css";
import { Project } from "../../../../models/Project";
import { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";

import MyRipple from "../../Components/MyRipple";

export default function Carousel({ project }: { project: Project }) {
  const folderPath =
    project.mainImagePath.split("/").slice(0, -1).join("/") + "/";

  const sliderRef = useRef<Slider>(null);
  return (
    <div className={styles.carousel}>
      <div
        className={styles.leftArrow}
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <MyRipple />
        <ArrowBackRounded />
      </div>
      <div
        className={styles.rightArrow}
        onClick={() => sliderRef.current?.slickNext()}
      >
        <MyRipple />
        <ArrowForwardRounded />
      </div>
      <div className={styles.slider}>
        <style>
          {`
          .slick-dots li button:before {
            color: var(--text3);
            opacity: 0.5; 
          }
          .slick-dots li.slick-active button:before {
            color: var(--text);
          }
  `}
        </style>
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
          responsive={[
            { breakpoint: 800, settings: { slidesToShow: 2 } },
            { breakpoint: 500, settings: { slidesToShow: 1 } },
          ]}
        >
          {project.carouselImages.map((image, index) => (
            <div
              key={index}
              className={styles["img-container"]}
              onClick={() => window.open(folderPath + image, "_blank")}
            >
              <img src={folderPath + image} alt={image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
