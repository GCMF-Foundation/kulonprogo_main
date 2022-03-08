import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import LogoEmpty from "./assets/logo-empty.png";

function Index() {
  const [logos, setLogos] = useState([]);

  const getLogos = async () => {
    try {
      let response = await axios.get("_api/main/stats");
      setLogos(response.data.items);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getLogos();
  }, []);

  const carouselProperties = {
    slidesToShow: logos.length < 5 ? logos.length : 5,
    centerMode: false,
    // centerPadding: "170px",
    rows: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: logos.length < 2 ? logos.length : 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: logos.length < 3 ? logos.length : 3,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="school-list-container">
      {logos.length > 0 ? (
        <div>
          <Slider {...carouselProperties} autoplay autoplaySpeed={2000}>
            {logos.map((item, index) => (
              <div key={index} className="item mr-3">
                <div className="col-xs-4 d-flex flex-column align-items-center">
                  {item.icon === "" ? (
                    <div className="img-responsive mb-3 logo-img">
                      <img src={LogoEmpty} alt="logo-school" />
                    </div>
                  ) : (
                    <div className="img-responsive mb-3 logo-img">
                      <img src={item.icon} alt="logo-school" />
                    </div>
                  )}
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
