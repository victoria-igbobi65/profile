import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const SkillListArray = [
  {
    name: "Github",
    emoji: "🥳",
    color: "red",
  },
  {
    name: "Javascript",
    emoji: "✌️",
    color: "blue",
  },
  {
    name: "ReactJs",
    emoji: "🤜",
    color: "green",
  },
  {
    name: "Python",
    emoji: "🤘",
    color: "yellow",
  },
  {
    name: "HTML + CSS",
    emoji: "🤘",
    color: "purple",
  },
];

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList skills={SkillListArray} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className='avatar'>
      <img src='focaccia.jpg' alt='victoria igbobi'></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Victoria Igbobi</h1>
      <p>
        Backend Developer looking to become a fullstack Dev. Currently backend
        is my strong suit and when not writing codes, i am watching movies
      </p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className='skill-list'>
      {skills.map((skill, index) => (
        <button
          key={index}
          className='skill'
          style={{ backgroundColor: skill.color }}
        >
          {skill.name} {skill.emoji}
        </button>
      ))}
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
