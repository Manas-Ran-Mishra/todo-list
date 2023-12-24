import React, { useEffect, useState } from 'react';
import '../Styles/About.css';

export default function About() {
  const [about, setAbout] = useState([]);
  const [hasError, setHasError] = useState(false);
  useEffect(async () => {
    try {
      const res = await fetch('http://localhost:8000/');
      const resJson = await res.json();
      setAbout(resJson);
    } catch (error) {
      console.log(error);
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <>
        <h1 className="about-head">An error occured</h1>
        <p className="about-body">Please try again later</p>
      </>
    );
  }

  return (
    about.length !== 0 && (
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
    )
  );
}
