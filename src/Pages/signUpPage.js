import React, { useState } from "react";
import LoginInput from "../components/public/loginInput/inputs";

const SignUpPage = () => {

  const [max_members, setMaxMembers] = useState(["alma", "ka", "3", "4"]);

  return (
    <div className="login-bg">
      <h1 className="login-title">Jelentkezés</h1>
      <div className="sign-cont">
        <form method="POST" action="/sign-up">
          <div className="right">
            <h1 className="log-dec-at inl">Csapat Név:</h1>
            <input
              className="sign-input name"
              type="text"
              placeholder="Csapat Név"
              name="TeamName"
            ></input>
            {max_members.map((team, index) => (
              <LoginInput key={index} some_key={index} team={team} />
            ))}
          </div>
          <div className="but-con">
            <button type="submit" className="join-button">
              Jelentkezz!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
