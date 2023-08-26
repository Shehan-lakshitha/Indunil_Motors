import React from "react";
import "./Home.css";
import imageBg from "../../Assets/Images/body.jpg";

import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="Home">
      <div className="imageBg">
        <img src={imageBg} alt="" />
      </div>
      <div className="sectionText">
        <h1>Get the Genuie Spare Parts</h1>
        <p>We provide you the best spare parts fit for your vehicle for the lowest price in the market</p>
        <button className="btn flex">View products <AiOutlineArrowRight className='icon'/> </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <div className="images flex">
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
