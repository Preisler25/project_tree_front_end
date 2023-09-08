import React, { useState } from "react";

const LoginInput = (params) => {
    return (
        <div key={params.key} className="name-class-cont">
            <div>
                key: {params.some_key}
                team: {params.team}
            </div>
                {/*<LoginNameInput key={team} team={team} />
                <LoginClassInput key={team} team={team} />*/}
            </div>
    );
}



const LoginNameInput = (team) => {
    const [user_name, setUserName] = useState('');

    const name_for_name = "Name" + team;

    const handleChange = (event) => {
        console.log(event.target.value);
        //TODO: test user name
        setUserName(event.target.value);
    }

    return (
            <input
                className="sign-input name"
                type="text"
                placeholder="Név"
                name={name_for_name}
                onChange={handleChange}
                value={user_name}
              ></input>
    );
}

const LoginClassInput = (team) => {
    const [user_class, setUserClass] = useState('');

    const name_for_class = "Class" + team;

    const handleChange = (event) => {
        console.log(event.target.value);
        //TODO: test for sql injection
        setUserClass(event.target.value);
    }

    return (
        <input
                className="sign-input class"
                type="text"
                placeholder="Osztály"
                name={name_for_class}
                onChange={handleChange}
                value={user_class}
              ></input>
    );
}

            


export default LoginInput;