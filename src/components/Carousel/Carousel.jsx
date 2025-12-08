import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        width: window.innerWidth < 768 ? 50 :72,
        height: window.innerWidth < 768 ? 50 :72,
        borderRadius: "50%",
        border: "1px solid #BCBCBC",
        background: "#fff",
        right: window.innerWidth < 768 ? "-10px" : "-80px",
        top: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10
      }}
      onClick={onClick}
    >
      <HiMiniArrowLongRight className="text-[#BCBCBC] text-3xl" />
    </div>
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        width: window.innerWidth < 768 ? 50 :72,
        height: window.innerWidth < 768 ? 50 :72,
        borderRadius: "50%",
        border: "1px solid #BCBCBC",
        background: "#fff",
        left: window.innerWidth < 768 ? "-10px" : "-80px",
        top: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10
      }}
      onClick={onClick}
    >
      <HiMiniArrowLongLeft className="text-[#BCBCBC] text-3xl" />
    </div>
  );
}

const Carousel = ({dots, children}) => {
  const settings = {
    dots: dots,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* {data?.map((item) => (
            <Card item={item} key={item.id} className="px-2"/>
        ))} */}
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
