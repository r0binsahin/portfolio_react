import "./resume.scss";
import "../../styles/_variables.scss";
import "../../styles/_mixins.scss";

import CV_Robin_Sahin_sv from "../../assets/cv/CV_Robin_Sahin_sv.pdf";
import CV_Robin_Sahin_eng from "../../assets/cv/CV_Robin_Sahin_eng.pdf";

import swedish_flag from "../../assets/icons/swedish_flag.png";
import british_flag from "../../assets/icons/british_flag.png";

import { useState } from "react";
import { ResumeCard } from "../../assets/icons/ResumeCard";

export const Resume = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setFlippedCards((prev) => {
      const newFlippedCards = [...prev];
      const cardIndex = newFlippedCards.indexOf(index);

      if (cardIndex === -1) {
        newFlippedCards.push(index);
      } else {
        newFlippedCards.splice(cardIndex, 1);
      }

      return newFlippedCards;
    });
  };
  return (
    <>
      <div className="resume">
        <h1>Resume</h1>
        <div className="cardContainer">
          <div className="flipCard" onClick={() => handleClick(1)}>
            <div
              className={`flipCard__inner ${
                flippedCards.includes(1) ? "rotate" : ""
              }`}
            >
              <div className="flipCard__front">
                <ResumeCard />
              </div>
              <div className="flipCard__back">
                <div className="flipCard__back__wrapper">
                  <h1>CV</h1>

                  <div className="btnWrapper">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
