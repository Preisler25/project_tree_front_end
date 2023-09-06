const SignUpPage = () => {
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
            <div className="name-class-cont">
              <span>Első tag:</span>
              <input
                className="sign-input name"
                type="text"
                placeholder="Név"
                name="Name1"
              ></input>
              <input
                className="sign-input class"
                type="text"
                placeholder="Osztály"
                name="Class1"
              ></input>
            </div>{" "}
            <div className="name-class-cont">
              <span>Második tag:</span>
              <input
                className="sign-input name"
                type="text"
                placeholder="Név"
                name="Name2"
              ></input>
              <input
                className="sign-input class"
                type="text"
                placeholder="Osztály"
                name="Class2"
              ></input>
            </div>{" "}
            <div className="name-class-cont">
              <span>Harmadik tag:</span>
              <input
                className="sign-input name"
                type="text"
                placeholder="Név"
                name="Name3"
              ></input>
              <input
                className="sign-input class"
                type="text"
                placeholder="Osztály"
                name="Class3"
              ></input>
            </div>{" "}
            <div className="name-class-cont">
              <span>Negyedik tag:</span>
              <input
                className="sign-input name"
                type="text"
                placeholder="Név"
                name="Name4"
              ></input>
              <input
                className="sign-input class"
                type="text"
                placeholder="Osztály"
                name="Class4"
              ></input>
            </div>
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
