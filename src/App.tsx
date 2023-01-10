import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import dancingPicture from "./assets/dancing--pexels.jpg"
import drawingPicture from "./assets/drawing--pexels.jpg"
import footballPicture from "./assets/football--pexels.jpg"
import musicPicture from "./assets/music--pexels.jpg"
import photographyPicture from "./assets/photography--pexels.jpg"


function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cardContainer'>
        
        <Card
          img={dancingPicture}
          alt="Dancing"
          rating={4.5}
          votes={48}
          title="Dancing"
          members={163} />

        <Card img={drawingPicture} alt="Dancing" rating={4.8} votes={65} title="Drawing" members={343} />
        <Card img={footballPicture} alt="Soccer" rating={4.7} votes={23} title="Soccer" members={421} />
        <Card img={musicPicture} alt="Music" rating={4.3} votes={77} title="Music" members={544} />
        <Card img={photographyPicture} alt="Photography" rating={4.2} votes={99} title="Photography" members={665} />
      </section>
    </div>

  )
}

export default App
