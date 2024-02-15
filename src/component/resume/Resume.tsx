import "./resume.scss";
import "../../styles/_variables.scss";
import "../../styles/_mixins.scss";

import CV_Robin_Sahin_sv from "../../assets/cv/CV_Robin_Sahin_sv.pdf";
import CV_Robin_Sahin_eng from "../../assets/cv/CV_Robin_Sahin_eng.pdf";

import swedish_flag from "../../assets/icons/swedish_flag.png";
import british_flag from "../../assets/icons/british_flag.png";

import { PiGithubLogo } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";

export const Resume = () => {
  return (
    <>
      <div id="resume">
        <h1>Resume</h1>
        <div className="cardContainer">
          <div className="imgContainer">
            <img
              src="https://i.postimg.cc/3J4kL7Zb/robinsahinabout.png"
              alt="a summer picture of Robin in a straw hat"
            />
          </div>
          <h3>Robin Sahin</h3>

          <div className="cv_wrapper">
            <div className="cvTitle">
              <p>Curriculum Vitae</p>
            </div>

            <div className="cv">
              <button>
                <a href={CV_Robin_Sahin_sv} target="_blank">
                  <img src={swedish_flag} alt="swedish flag" />
                </a>
              </button>
              <button>
                <a href={CV_Robin_Sahin_eng} target="_blank">
                  <img src={british_flag} alt="british flag" />
                </a>
              </button>
            </div>
          </div>

          <div className="links">
            <a href="mailto:robin.sahin88@gmail.com" target="_blank">
              <IoMailOpenOutline color="#fff" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/robin-sahin-15404a24b/"
              target="_blank"
            >
              <SlSocialLinkedin color="#fff" size={30} />
            </a>
            <a href="https://github.com/r0binsahin" target="_blank">
              <PiGithubLogo color="#fff" size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
