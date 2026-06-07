import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Memoria</h1>
        <p className="hero-subtitle">Your Memories. Your Stories. Your Space.</p>
        <p className="hero-description">
          Capture your most precious moments and experiences. Preserve memories, document emotions,
          and create a safe space for the stories that matter most to you.
        </p>

        <div className="hero-buttons">
          <a href="#download" className="btn btn-primary">
            Download App
          </a>
          <Link to="/#features" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
