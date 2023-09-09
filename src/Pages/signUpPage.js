import React, { useState } from "react";
import {TeamNameInput, LoginInput} from "../components/public/loginInput/inputs";

const SignUpPage = () => {

  const [max_members, setMaxMembers] = useState(["alma", "ka", "3", "4"]);

  return (
    <div className="login-bg">
      <h1 className="login-title">Jelentkezés</h1>
      <div className="sign-cont">
        {/*login form*/}
        <form method="GET" action="/sign-up">
          <div className="right">
            <TeamNameInput />
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
