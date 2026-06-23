import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Saverites</h2>
          <p className="about-description">
            Saverites is a modern mobile application designed to help you preserve and share your most precious memories.
            Whether it's a perfect sunset, a meaningful conversation, or an important life milestone,
            Saverites provides a secure, beautiful, and intuitive space to capture and relive these moments.
          </p>
          <p className="about-description">
            We believe that memories are precious. That's why we've built Saverites with privacy,
            simplicity, and beauty at its core. Your memories belong to you, and you have complete
            control over how they're stored and shared.
          </p>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span>Your Memories<br />Come Here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
