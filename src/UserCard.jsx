import React from "react";

const playerData = [
  {
    name: "MS Dhoni",
    home: "Ranchi",
    role: "Captain",
    skills: ["CAPTAIN", "BATTER", "BOWLER", "W-keeper", "ALL-ROUNDER"],
    active: false,
    profile: "Images/Dhoni.jpg",
  },
  {
    name: "Rohit Sharma",
    home: "Mumbai",
    role: "Captain/Opener",
    skills: ["CAPTAIN", "BATTER", "BOWLER", "W-keeper", "ALL-ROUNDER"],
    active: true,
    profile: "Images/Rohit.webp",
  },
  {
    name: "Sachin Tendulkar",
    home: "Bombay",
    role: "Opener",
    skills: ["CAPTAIN", "BATTER", "BOWLER", "W-keeper", "ALL-ROUNDER"],
    active: false,
    profile: "Images/sachin.jpg",
  },
  {
    name: "Smirti Mandhana",
    home: "Bangalore",
    role: "BATSWOMEN",
    skills: ["CAPTAIN", "BATTER", "BOWLER", "W-keeper", "ALL-ROUNDER"],
    active: true,
    profile: "Images/Mandhana.jpg",
  },
];

function Player(props) {
  return (
      <div className="card-container">
        <span className={props.active ? "pro active" : "pro retired"}>
          {props.active ? "ACTIVE" : "RETIRED"}
        </span>
        <img src={props.profile} className="img" alt="" />
        <h3>{props.name}</h3>
        <h3>{props.home}</h3>
        <p>{props.role}</p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary outline">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export const UserCard = () => {
  return (
    <div className="card">
      {playerData.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          home={player.home}
          role={player.role}
          active={player.active}
          profile={player.profile}
          skills={player.skills}
        />
      ))}
    </div>
  );
};

// User.propTypes = {
//   name: propTypes.string.isRequired,
//   home: propTypes.string.isRequired,
//   role: propTypes.string.isRequired,
//   skills: propTypes.arrayof(propTypes.string).isRequired,
//   active: propTypes.bool.isRequired,
//   profile: propTypes.string.isRequired,
// }

// {/*  */}
