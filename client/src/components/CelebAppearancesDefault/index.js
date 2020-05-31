import React from "react";
import './style.css'

const DefaultCelebAppearances = () => {
  return (
    <>
      <h6 className="title">Appearances</h6>
      <p className="celeb-appearances-overview">
      <img
        className="trending-celeb-images"
        src="https://i.pinimg.com/originals/c2/d1/e8/c2d1e8ba4e5b23bbad9bf78b695da39a.jpg"
        title="pic1"
        alt="default trending celebrities"
      />
      {/* <p className="celeb-appearances-overview"> */}
        That's all he can stands, 'cause he can't stands no more!
      {/* </p> */}
      <br></br><br></br>
      <img
        className="trending-celeb-images"
        src="https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
        title="pic2"
        alt="default trending celebrities"
      />
      {/* <p className="celeb-appearances-overview"> */}
        If there's one thing he hates, it's grime.
        And when they play dirty, he cleans 'em up.
      {/* </p> */}
      <br></br><br></br>
      <img
        className="trending-celeb-images"
        src="https://external-preview.redd.it/Cm_ElRIj0TuO4n8YQZvRz6mpOih7sHEbidTE-JROQjw.jpg?auto=webp&s=6eb4b91a9dc7d63ffb036adb69a6c29e8ce1fc7c"
        title="pic4"
        alt="default trending celebrities"
      />
      {/* <p className="celeb-appearances-overview"> */}
        Search above to learn more about your favorite celebrities!
      </p>
    </>
  );
};

export default DefaultCelebAppearances;
