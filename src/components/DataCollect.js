import React from "react";

export default class DataCollect extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dataCollectContainer">
        <p>
          Tell us about yourself <br />
          So we can find people who like you for you.
        </p>

        <button>N E X T</button>
      </div>
    );
  }
}
