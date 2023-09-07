import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-bg">
      <h1 className="login-title">CODEWEEK</h1>
      <div className="login-cont">
        <h1 className="log-dec-at">Decoding Atlantis</h1>
        <div className="login-text">
          Lépj be a "2023 Petrik CodeWeek" izgalmas világába, ahol a rejtélyekel
          és legendákal teli Atlantisz vár felfedezésre! Fedezd fel az ősi város
          titkait interaktív programokon keresztül. Csapatban dolgozz, alkoss,
          és találd meg a választ a város legnagyobb rejtélyeire a modern világ
          eszközeivel. Vajon sikerül neked megfejteni Atlantisz titkait?
          Csatlakozz hozzánk a "Decoding Atlantis" kalandjára, és élj át egy
          felejthetetlen hetet a digitálistér és a legendák lenyűgöző
          összefonódásában!
        </div>
        <h1 className="log-dec-at">Jelentkezz a 2023-as CodeWeek-re!</h1>
        <Link to="/sign-up" className="join-button">
          Jelentkezz!
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
