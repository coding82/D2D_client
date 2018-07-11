import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
var photo1 = require("../images/home_photo.jpg");
var photo2 = require("../images/home_photo2.jpg");
var photo3 = require("../images/home_photo3.jpg");

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    image: photo1
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    image: photo2
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    image: photo3
  }
];

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Have a date with your privacy secured </h1>
        <p>
          Find the best match on D2D, and start dating in cryptocurrency. <br/>
          Your private lives are important to us and we make sure to put them in a safe hand, Ethereum Blockchain.
        </p>
        {/* <Slider className="slide" autoplay={2000} previousButton={false} nextButton={false}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider> */}

        <div className="infoContainer">
          <div className="joinContainer">
            <Link to="/auth/signup" className="joinButton">
              Join D2D
            </Link>
            <p>
              By clicking Join you agree to our Terms, Privacy, & Cookie
              Policies.
            </p>
          </div>

          <div className="appButton">
            <p>GET THE APP</p>
            <a href="http://www.naver.com" target="blank">
              <ion-icon name="logo-apple" />
            </a>
            <br />
            <a href="http://www.naver.com" target="blank">
              <ion-icon name="logo-android" />
            </a>
          </div>
        </div>

      </div>
    );
  }
}
export default Home;
