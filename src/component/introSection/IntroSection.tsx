import "./introSection.scss";
import "../../styles/_variables.scss";
import "../../styles/_mixins.scss";

export const IntroSection = () => {
  return (
    <div id="start">
      <div className="imgContainer">
        <img
          src="https://i.postimg.cc/HWPJ4jby/robinsahinstart.png"
          alt="Robin Sahin portrait"
        />
      </div>

      <h1>Hi, I'm Robin</h1>
      <h3>a Stockholm-based developer</h3>
      <p>
        Thrilled to share the excitement of my journey as a dedicated and
        curious junior front-end developer. Currently, I am immersed in an
        enriching internship at{" "}
        <a href="https://daresay.co/" target="_blank">
          Daresay by Knightec
        </a>
        , where I am passionately exploring various tools and frameworks within
        frontend development. My journey began with studies at Medieinstitutet,
        and over the past year, my commitment to coding and problem-solving has
        only deepened.
      </p>
      <p>
        Eager to learn and develop my skills, I have embraced challenges with
        enthusiasm, consistently delivering quality work. As a team player, I
        recognize the significance of collaboration and communication in the
        development process. This past year has been a dynamic and
        transformative experience, and I look forward to continued growth and
        excellence in the ever-evolving world of frontend development.
      </p>
    </div>
  );
};
