import React from "react";
import LoginForm from './loginForm';

export default class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      signup: false,
      login: false,
      visitor: true,
      showForm: false,
      name: "",
      email: "",
      password: ""
    };

    this.handleLoginOrSignup = this.handleLoginOrSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(option) {
    if (option === "login") this.setState({ showForm: "login" });
    if (option === "signup") this.setState({ showForm: "signup" });
  }

  handleLoginOrSignup(option) {
    if (option === "login") this.setState({ login: true });
    else this.setState({ signup: true });
  }

  handleSubmit() {
    // this.setState({ visitor: !this.state.visitor });
    window.location.assign('/you');
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let option = this.props.match.params.option;
    return (
      <div>
        {option === "login" ? (
          <div className="login">

            <LoginForm />

          </div>
        ) : option === "signup" ? (
          <div className="signup">

            <LoginForm showForm={true} />

          </div>
        ) : (
          <div>nope</div>
        )}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       {
  //         <div>
  //           <button onClick={() => this.handleClick("login")}>Login</button>
  //           <button onClick={() => this.handleClick("signup")}>Signup</button>
  //         </div>
  //       }

  //       {this.state.visitor ? (
  //         <div>
  //           <p>Please Log In or Sign Up</p>
  //           {this.state.showForm === "login" && (
  //             <LoginForm handleSubmit={this.handleSubmit} />
  //           )}

  //           {this.state.showForm === "signup" && (
  //             <LoginForm showForm="signup" handleSubmit={this.handleSubmit} />
  //           )}
  //         </div>
  //       ) : (
  //         <div>
  //         <p>Welcome to D2D</p>
  //         <button onClick={this.handleSubmit} >Logout</button>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
}
