import React from "react";
import Image from "next/image";
import pic from "../public/images/profilephoto.jpeg";
import foodPic1 from "../public/images/food-app1.png";
import foodPic2 from "../public/images/food-app2.png";
import foodPic3 from "../public/images/food-app3.png";

const Cards = () => {
  return (
    <>
      <div className="card w-4/5 bg-base-100 shadow-xl my-8 dark:shadow-sky-900/30">
        <figure>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <Image src={foodPic1} alt="me" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  &#10094;
                </a>
                <a href="#slide2" className="btn btn-circle">
                  &#10095;
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image src={foodPic2} alt="me" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  &#10094;
                </a>
                <a href="#slide3" className="btn btn-circle">
                  &#10095;
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Image src={foodPic3} alt="me" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  &#10094;
                </a>
                <a href="#slide1" className="btn btn-circle">
                  &#10095;
                </a>
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
