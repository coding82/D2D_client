import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      visitor: 'true'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleSubmit()
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    var signupForm = this.props.showForm
    return (
      <form className="loginForm">
        {signupForm && (
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
        )}

        <label>
          Email:
          <input type="text" name="email" onChange={this.handleChange} />
        </label>

        <label>
          Password:
          <input type="text" name="password" onChange={this.handleChange} />
        </label>

        <input type="submit" onClick={this.handleClick} />
      </form>
    );
  }
}
