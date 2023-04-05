const Card = () => {
  return (
    <div className="card">
      <div className="card__header"></div>

      <div className="card__content">
        <figure className="card__profile">
          <img
            src="/assets/avatar.svg"
            alt="profile avatar"
            width="80"
            height="80"
            className="card__avatar"
          />
          <figcaption className="card__citation">
            I design and code stuff and I love what I do
          </figcaption>
        </figure>

        <h1 className="card__title">Full Stack Developer</h1>

        <div className="card__skills">
          <div className="card__skill">
            <img
              src="/assets/designer.svg"
              alt="design"
              width="30"
              height="30"
            />
            <ul>
              <li>Figma / Illustrator / Photoshop</li>
              {/* <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li> */}
            </ul>
          </div>

          <div className="card__skill">
            <img
              src="/assets/frontend.svg"
              alt="frontend"
              width="30"
              height="30"
            />
            <ul>
              <li>HTML5 / CSS3 / JS / React</li>
              {/* <li>VanillaJS</li>
              <li>React</li> */}
            </ul>
          </div>

          <div className="card__skill">
            <img
              src="/assets/backend.svg"
              alt="frontend"
              width="30"
              height="30"
            />
            <ul>
              <li>mySQ / NodeJS</li>
              {/* <li>NodeJS</li> */}
            </ul>
          </div>
        </div>

        <div className="card__contact">
          <a href="#">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
