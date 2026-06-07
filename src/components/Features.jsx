import './Features.css';

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Memories',
      description: 'Preserve your most valuable moments forever. Capture photos, moments, and experiences with ease.',
      icon: '📸'
    },
    {
      id: 2,
      title: 'Stories',
      description: 'Capture experiences, emotions, and life events. Write your narrative with rich text and images.',
      icon: '✍️'
    },
    {
      id: 3,
      title: 'Privacy',
      description: 'Your memories stay secure and protected. Complete control over who sees your content.',
      icon: '🔒'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Memoria?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
