import React, { useEffect, useState } from 'react';
import '../Styles/About.css';

export default function About() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    getMsg();
  });
  const getMsg = async () => {
    const res = await fetch('http://localhost:8000/');
    const resJson = await res.json();
    setAbout(resJson);
    // console.log(resJson)
  };

  return (
    <div className="about-container">
      {about.map((item) => {
        return (
          <div>
            <h1 className="about-head">{item.head}</h1>
            <p className="about-body">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
