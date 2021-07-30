import React from "react";
//import "./profileui.css";
import "../App.css";

function ProfileUi(props) {
  return (
    <div className="prof-container">
      <div className="box">
        <img className="img-box" src={props.imgUrl} alt="profile-img" />
        <div className="name">{props.name}</div>
        <div className="des">{props.designation}</div>
      </div>
    </div>
  );
}

export default ProfileUi;
