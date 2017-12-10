import React from "react";
import Cheeta from "../images/cara-fuller-289887.jpg";
import "./info.css";

const Info = () => {
  return (
    <div id="Info" className="InfoWrapper">
      <div className="About">Stuffstuffstuff</div>
      <img className="InfoPicture" src={Cheeta} />
      <div className="Info">
        <h2>Codes I’ve coded in:</h2>
        <ul>
          <li>
            Javascript:
            <ul>
              <li>ReactJS, Redux, NodeJS, Mongo, AngularJS, JQuery;</li>
            </ul>
          </li>
          <li>HTML5; </li>
          <li>CSS: </li>
          <ul>
            <li>Bootstrap, MateralizeCSS, SemanticUI;</li>
          </ul>
          <li>I’ve also programmed in,</li>
          <ul>
            <li>
              C#: ASP.NET Core, Postgresql;
              <li>Python: Django, MySQL, Flask;</li>
              <li>Java;</li>
              <li>Lua;</li>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Info;
