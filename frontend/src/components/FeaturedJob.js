import React from "react";
import "../style/featured_job.css";
import icon from "../style/icon-1.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const FeaturedJob = () => {
  return (
    <div className="container_f">
      <h3 className="heading0">
        Featured<span style={{ color: "#26A4FF" }}> jobs</span>
      </h3>
      <div className="box-container_f">

        <div className="box_f">

          <div>
            <img src={icon} alt="icon" />
            <div className="btn_f">Full Time</div>
            <br />
          </div>

          <div>
            <div className="job">
              <Link to="#">Email Marketing</Link>
            </div>
            <div className="p">html(company) . Spain(address)</div>
          </div>

          <div className="para">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                commodi?
            </p>
            </div>

          <div>
            <div className="btn_f0">Design</div>
            <div className="btn_f0 btn_f01">Marketing</div>
          </div>

        </div>


        <div className="box_f">

          <div>
            <img src={icon} alt="icon" />
            <div className="btn_f ">Full Time</div>
            <br />
          </div>

          <div>
            <div className="job">
              <Link to="#">Email Marketing</Link>
            </div>
            <div className="p">html(company) . Spain(address)</div>
          </div>

          <div className="para">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                commodi?
            </p>
            </div>

          <div>
            <div className="btn_f0">Design</div>
            <div className="btn_f0 btn_f01">Marketing</div>
          </div>

        </div>


        <div className="box_f">

          <div>
            <img src={icon} alt="icon" />
            <div className="btn_f">Full Time</div>
            <br />
          </div>

          <div>
            <div className="job">
              <Link to="#">Email Marketing</Link>
            </div>
            <div className="p">html(company) . Spain(address)</div>
          </div>

          <div className="para">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                commodi?
            </p>
            </div>

          <div>
            <div className="btn_f0">Design</div>
            <div className="btn_f0 btn_f01">Marketing</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FeaturedJob;
