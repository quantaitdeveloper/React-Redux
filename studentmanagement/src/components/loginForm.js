import { useHistory, Redirect } from "react-router-dom";

import React from "react";


export default function Login() {
  let history = useHistory();
  
  let login = () => {
    localStorage.setItem("access", true);
    history.push("/home");
  };
 
  return (
    localStorage.getItem("access")? <Redirect to="/home"/> :
                                                                  <div class="login-page">
                                                                    <div class="form">
                                                                      <form class="register-form">
                                                                        <input type="text" placeholder="name" />
                                                                        <input type="password" placeholder="password" />
                                                                        <input type="text" placeholder="email address" />
                                                                        <button>create</button>
                                                                        <p class="message">
                                                                          Already registered? <a href="#">Sign In</a>
                                                                        </p>
                                                                      </form>
                                                                      <form class="login-form">
                                                                        <input type="text" placeholder="username" />
                                                                        <input type="password" placeholder="password" />
                                                                        <button onClick={login}>login</button>
                                                                        <p class="message">
                                                                          Not registered? <a href="#">Create an account</a>
                                                                        </p>
                                                                      </form>
                                                                    </div>
                                                                  </div>
  );
}
