import React from 'react';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const [playMusic, setPlayMusic] = useState(false);
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  const handleClick = () => {
    setPlayMusic(true);
  };

  return (
    <div className="app">
      <animated.div style={animationProps}>
        <h1 className="title">تبریک تولد!</h1>
        <p className="message">امیدوارم سالی پر از خوشی و موفقیت داشته باشی!</p>
      </animated.div>

      <button className="btn" onClick={handleClick}>کلیک کنید تا تولد شما را به سبک جدیدی تبریک بگم</button>

      {playMusic && (
        <ReactPlayer
          url="https://dl.nicmusic.net/upload/2025/01/16/Dj%2021%20-%20Shadmehr%20Vibe.mp3"
          playing
          width="0px"
          height="0px"
        />
      )}

      <footer className="credits">
        این کد برای تبریک تولد آقای مهندس ابراهیم آقاباقری نوشته شده است توسط علی یوسفی
      </footer>
    </div>
  );
}

export default App;
