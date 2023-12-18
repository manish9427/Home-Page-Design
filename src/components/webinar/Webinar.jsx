import React from "react";
import "./Webinar.scss";

const Webinar = () => {
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <img
          className="imgg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsoxychdRGaxzBpJ5KHeOw5ICZI0EZuO0yw&usqp=CAU"
        />
      </div>

      <div className="webinar">
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aut earum doloremque repudiandae delectus. Nemo, quod! Necessitatibus
          sapiente odio laudantium tempore obcaecati corporis praesentium
          laboriosam aspernatur ducimus, architecto quaerat! Eum.
        </p>
        <div className="webinar-banner">
          <div className="flex-webinar-banner">
            <div className="webinar-one">
              <div className="webinar-two">
                <img
                  className="webinar-img"
                  src="https://trendmicro.my.site.com/Gpartner/resource/1697508416000/GlobalPRM_NewLoginPage/images/TM_partner_program_01.jpg"
                />
              </div>
            </div>
            <div className="webinar-one">
              <div className="webinar-two">
                <img
                  className="webinar-img"
                  src="https://trendmicro.my.site.com/Gpartner/resource/1697508416000/GlobalPRM_NewLoginPage/images/PP_Image2.jpg"
                />
              </div>
            </div>
            <div className="webinar-one">
              <div className="webinar-two">
                <img
                  className="webinar-img"
                  src="https://trendmicro.my.site.com/Gpartner/resource/1697508416000/GlobalPRM_NewLoginPage/images/PP_Image3.jpg"
                />
              </div>
            </div>
          </div>
          <div className="flex-webinar-banner">
            <div className="webinar-one">
              <div className="webinar-two">
                <img
                  className="webinar-img"
                  src="https://trendmicro.my.site.com/Gpartner/resource/1697508416000/GlobalPRM_NewLoginPage/images/TM_partner_program_01.jpg"
                />
              </div>
            </div>
            <div className="webinar-one">
              <div className="webinar-two">
                <img
                  className="webinar-img"
                  src="https://trendmicro.my.site.com/Gpartner/resource/1697508416000/GlobalPRM_NewLoginPage/images/PP_Image2.jpg"
                />
              </div>
            </div>
            <div className="webinar-one">
              <div className="webinar-two">
                <img
                  className="webinar-img"
                  src="https://trendmicro.my.site.com/Gpartner/resource/1697508416000/GlobalPRM_NewLoginPage/images/PP_Image3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
